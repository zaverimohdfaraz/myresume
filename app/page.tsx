import Link from "next/link";
import Image from "next/image";
import Spot from "@/components/Spot";
import ProjectArt from "@/components/ProjectArt";
import Board from "@/components/Board";
import { experience, intro, profile, projects } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const current = experience[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
        <div>
          <Image
            src={profile.photo}
            alt={profile.name}
            width={64}
            height={64}
            priority
            className="h-16 w-16 rounded-2xl object-cover ring-1 ring-line"
          />
          <h1 className="mt-10 text-[3.25rem] font-semibold sm:text-7xl lg:text-[5.5rem]">
            Systems that keep a business running.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted">{intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/work" className="rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-accent">
              See the work
            </Link>
            <Link href="/contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-ink">
              Start a project
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <p className="text-sm text-muted">Live project board. Hover to pause, click a card to move it.</p>
          <div className="mt-5">
            <Board />
          </div>
        </div>
      </section>

      <section aria-labelledby="selected" className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 id="selected" className="text-4xl font-semibold sm:text-6xl">
            Selected work
          </h2>
          <Link href="/work" className="text-muted underline decoration-line underline-offset-8 hover:text-ink">
            All {projects.length} projects
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <li key={p.slug}>
              <Spot className="h-full">
                <Link href={`/work/${p.slug}`} className="flex h-full flex-col gap-5 p-4">
                  <ProjectArt project={p} priority={i === 0} />
                  <div className="px-2 pb-3">
                    <p className="text-sm text-accent">{p.kind}</p>
                    <p className="mt-1 font-display text-2xl font-semibold">{p.name}</p>
                    <p className="mt-2 text-[0.95rem] text-muted">{p.summary}</p>
                  </div>
                </Link>
              </Spot>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="now" className="mx-auto mt-32 grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 id="now" className="text-4xl font-semibold sm:text-6xl">
            Currently at {current.company}
          </h2>
          <p className="mt-5 text-lg text-muted">
            {current.role}, since {current.period.replace(" – Present", "")}.
          </p>
          <Link href="/experience" className="mt-8 inline-block text-ink underline decoration-accent underline-offset-8 hover:text-accent">
            Read the full career history
          </Link>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {current.points.slice(0, 3).map((pt) => (
            <li key={pt} className="py-5 text-muted">
              {pt}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
