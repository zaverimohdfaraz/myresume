import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import Words from "@/components/motion/Words";
import TiltCard from "@/components/motion/TiltCard";
import { bio, profile, services, skills } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-start gap-16 px-5 pb-28 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="text-5xl font-semibold text-balance sm:text-7xl">
            <Words text="I build business software, end to end." />
          </h1>
          <div className="mt-12 space-y-6 text-lg text-muted">
            {bio.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.2}>
          <TiltCard className="aspect-[4/5]">
            <Image src={profile.photo} alt={profile.name} fill sizes="(min-width: 1024px) 26rem, 90vw" className="object-cover" />
          </TiltCard>
        </Reveal>
      </section>

      <section aria-labelledby="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 id="services" className="mb-16 text-5xl font-semibold sm:text-7xl">
            What I build
          </h2>
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <li>
                <TiltCard className="h-full">
                  <div className="h-full p-10">
                    <h3 className="font-display text-3xl font-semibold">{s.title}</h3>
                    <p className="mt-4 text-lg text-muted">{s.text}</p>
                  </div>
                </TiltCard>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mx-auto max-w-7xl px-5 pb-32 pt-24 sm:px-8">
        <Reveal>
          <h2 id="skills" className="mb-16 text-5xl font-semibold sm:text-7xl">
            Tools I reach for
          </h2>
        </Reveal>
        <dl className="grid gap-12 md:grid-cols-2">
          {skills.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div>
                <dt className="text-sm text-accent">{g.group}</dt>
                <dd className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="rounded-full border border-line px-4 py-2 text-[0.95rem] transition-colors hover:border-accent hover:text-accent">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
