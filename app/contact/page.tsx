import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";
import Words from "@/components/motion/Words";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-20 px-5 pb-32 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h1 className="text-[3.5rem] font-semibold text-balance sm:text-8xl">
          <Words text="Tell me what to build." />
        </h1>
        <Reveal delay={0.5}>
          <p className="mt-8 max-w-md text-lg text-muted">
            A CRM for your team, a website that brings in enquiries, or a process that should run without anyone touching it. I usually reply within a day.
          </p>
        </Reveal>
        <ul className="mt-14 divide-y divide-line border-y border-line">
          {[
            { href: `mailto:${profile.email}`, label: profile.email },
            { href: profile.phoneHref, label: profile.phone },
            { href: profile.whatsapp, label: "WhatsApp", external: true },
          ].map((c, i) => (
            <Reveal key={c.label} delay={0.6 + i * 0.08}>
              <li>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener" : undefined}
                  className="block py-6 font-display text-2xl font-semibold transition-colors hover:text-accent sm:text-3xl"
                >
                  {c.label}
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
      <Reveal delay={0.2}>
        <div className="rounded-[2rem] border border-line bg-surface p-7 sm:p-12">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
