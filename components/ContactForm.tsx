"use client";

import { useState } from "react";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Message not sent. Email me directly instead.");
      form.reset();
      setStatus({ state: "sent", message: "Message sent. I'll reply within a day." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Message not sent." });
    }
  }

  const field =
    "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm text-muted">
        What do you need built?
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="A CRM for my team, a website for my business, a job opening…"
          className={field}
        />
      </label>
      {/* Honeypot: bots fill this, people never see it */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status.state === "sending"} className="rounded-full bg-accent px-7 py-3 font-semibold text-paper hover:brightness-110 disabled:opacity-60">
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={status.state === "error" ? "text-sm text-red-400" : "text-sm text-muted"}>
          {status.message}
        </p>
      </div>
    </form>
  );
}
