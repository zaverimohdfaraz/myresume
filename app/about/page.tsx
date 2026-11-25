import type { Metadata } from "next";
import Image from "next/image";
import { bio, profile, services, skills } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_22rem]">
        <div>
          <h1 className="text-5xl font-semibold text-balance sm:text-7xl">{bio[0]}</h1>
          <div className="mt-10 space-y-5 text-lg text-muted">
            {bio.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <Image src={profile.photo} alt={profile.name} width={444} height={543} className="w-full rounded-2xl object-cover ring-1 ring-line lg:self-start" />
      </section>

      <section aria-labelledby="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <h2 id="services" className="text-4xl font-semibold sm:text-6xl">
          What I build
        </h2>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="bg-surface p-8 sm:p-10">
              <h3 className="font-display text-3xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mx-auto max-w-6xl px-5 pb-32 sm:px-8">
        <h2 id="skills" className="text-4xl font-semibold sm:text-6xl">
          Tools I reach for
        </h2>
        <dl className="mt-14 grid gap-10 md:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group}>
              <dt className="text-sm text-accent">{g.group}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full border border-line px-3.5 py-1.5 text-[0.95rem]">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
