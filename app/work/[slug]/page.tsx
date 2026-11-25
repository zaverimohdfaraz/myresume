import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectArt from "@/components/ProjectArt";
import { projects, tiers } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const tier = tiers.find((t) => t.id === p.tier);

  return (
    <article className="mx-auto max-w-5xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <Link href="/work" className="text-muted hover:text-ink">
        Back to all work
      </Link>
      <p className="mt-10 text-accent">{tier?.title}</p>
      <h1 className="mt-3 text-5xl font-semibold text-balance sm:text-7xl">{p.name}</h1>
      <p className="mt-6 max-w-3xl text-xl text-muted">{p.summary}</p>

      <div className="mt-12">
        <ProjectArt project={p} priority variant="full" />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div>
          <p className="text-lg">{p.description}</p>
          <ul className="mt-8 space-y-4">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-4">
                <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-muted">Client</dt>
            <dd className="mt-1 text-base">{p.client}</dd>
          </div>
          <div>
            <dt className="text-muted">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-line px-3 py-1 text-muted">
                  {s}
                </span>
              ))}
            </dd>
          </div>
          {p.url && (
            <div>
              <dt className="text-muted">Live site</dt>
              <dd className="mt-1">
                <a href={`https://${p.url}`} target="_blank" rel="noopener" className="text-base underline decoration-accent underline-offset-4 hover:text-accent">
                  {p.url}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <Link href={`/work/${next.slug}`} className="mt-24 block rounded-2xl border border-line bg-surface p-8 hover:border-accent/50 sm:p-12">
        <p className="text-muted">Next project</p>
        <p className="mt-2 font-display text-4xl font-semibold sm:text-6xl">{next.name}</p>
      </Link>
    </article>
  );
}
