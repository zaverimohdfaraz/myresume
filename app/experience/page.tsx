import type { Metadata } from "next";
import Link from "next/link";
import Roles from "@/components/Roles";
import { education, experience, profile } from "@/lib/data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <h1 className="text-6xl font-semibold sm:text-8xl">Experience</h1>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="max-w-2xl text-lg text-muted">Four roles, from RPA bots to full stack CRMs.</p>
        <a href={profile.resume} target="_blank" rel="noopener" className="rounded-full border border-line px-5 py-2 hover:border-ink">
          Download resume
        </a>
      </div>

      <div className="mt-16">
        <Roles items={experience} />
      </div>

      <div className="mt-28 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-4xl font-semibold sm:text-5xl">Education</h2>
        <ul className="divide-y divide-line border-y border-line">
          {education.map((e) => (
            <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
              <span className="font-display text-2xl font-semibold">{e.title}</span>
              <span className="text-muted">{e.place}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-16 text-muted">
        Want the full detail? <Link className="text-ink underline decoration-accent underline-offset-4" href="/contact">Get in touch</Link>.
      </p>
    </section>
  );
}
