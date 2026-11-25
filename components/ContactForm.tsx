"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  // Inputs are underlined and draw their accent line on focus.
  const field =
    "peer block w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted/50 focus:outline-none focus:ring-0";

  return (
    <form onSubmit={onSubmit} className="grid gap-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <Underlined label="Your name">
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </Underlined>
        <Underlined label="Email">
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </Underlined>
      </div>
      <Underlined label="What do you need built?">
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="A CRM for my team, a website for my business, a job opening…"
          className={`${field} resize-none`}
        />
      </Underlined>
      {/* Honeypot: bots fill this, people never see it */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={status.state === "sending"} className="rounded-full bg-accent px-8 py-4 text-lg font-semibold text-paper hover:brightness-110 disabled:opacity-60">
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={status.state === "error" ? "text-sm text-red-400" : "text-sm text-muted"}>
          {status.message}
        </p>
      </div>
    </form>
  );
}

function Underlined({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="relative block text-sm text-muted">
      {label}
      <span className="relative mt-1 block">
        {children}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 peer-focus:scale-x-100"
        />
      </span>
    </label>
  );
}
