import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-5 pb-32 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h1 className="text-6xl font-semibold text-balance sm:text-8xl">Tell me what to build.</h1>
        <p className="mt-8 max-w-md text-lg text-muted">
          A CRM for your team, a website that brings in enquiries, or a process that should run without anyone touching it.
          I usually reply within a day.
        </p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          <li className="py-5">
            <a className="font-display text-2xl font-semibold hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li className="py-5">
            <a className="font-display text-2xl font-semibold hover:text-accent" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </li>
          <li className="py-5">
            <a className="font-display text-2xl font-semibold hover:text-accent" href={profile.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
