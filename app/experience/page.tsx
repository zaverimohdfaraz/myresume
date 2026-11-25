import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Words from "@/components/motion/Words";
import Magnetic from "@/components/motion/Magnetic";
import Timeline from "@/components/Timeline";
import { education, experience, profile } from "@/lib/data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-32 pt-16 sm:px-8 sm:pt-24">
      <h1 className="text-[3.5rem] font-semibold sm:text-8xl">
        <Words text="Experience" />
      </h1>
      <Reveal delay={0.4}>
        <p className="mt-6 max-w-2xl text-lg text-muted">Four roles, from RPA bots and data work to full stack CRMs.</p>
      </Reveal>
      <Reveal delay={0.5}>
        <div className="mt-10">
          <Magnetic>
            <a href={profile.resume} target="_blank" rel="noopener" className="inline-block rounded-full border border-line px-6 py-3 font-semibold hover:border-ink">
              Download resume
            </a>
          </Magnetic>
        </div>
      </Reveal>

      <div className="mt-24 max-w-4xl">
        <Timeline items={experience} />
      </div>

      <div className="mt-40 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="text-5xl font-semibold sm:text-6xl">Education</h2>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <li className="flex flex-wrap items-baseline justify-between gap-2 py-7">
                <span className="font-display text-3xl font-semibold">{e.title}</span>
                <span className="text-muted">{e.place}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal className="mt-24">
        <p className="text-lg text-muted">
          Want the full detail?{" "}
          <Link className="text-ink underline decoration-accent underline-offset-4 hover:text-accent" href="/contact">
            Get in touch
          </Link>
          .
        </p>
      </Reveal>
    </section>
  );
}
