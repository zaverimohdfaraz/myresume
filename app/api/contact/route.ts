import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// Best-effort limit per IP: 5 messages per 10 minutes. Memory is per server
// instance, so this slows floods down rather than guaranteeing a hard cap.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

// Strips line breaks, quotes and angle brackets so the value is safe in mail headers
function headerSafe(s: string) {
  return s.replace(/[\r\n<>"]/g, " ").trim();
}

export async function POST(req: Request) {
  // Only accept posts sent from this site's own pages
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  let sameOrigin = false;
  try {
    sameOrigin = !!origin && !!host && new URL(origin).host === host;
  } catch {}
  if (!sameOrigin) return NextResponse.json({ error: "Invalid request." }, { status: 403 });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });
  }

  if (Number(req.headers.get("content-length") ?? 0) > 20_000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled → silently accept so bots don't retry
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = headerSafe(String(body.name ?? "")).slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name) return NextResponse.json({ error: "Add your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Check your email address." }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: "Write a little more about what you need." }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP env vars missing");
    return NextResponse.json({ error: "Email isn't set up yet. Write to farazzaveri26@gmail.com instead." }, { status: 500 });
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: { name, address: email },
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Message not sent. Email farazzaveri26@gmail.com directly." }, { status: 502 });
  }
}
