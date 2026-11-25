"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Spot from "@/components/Spot";
import ProjectArt from "@/components/ProjectArt";
import { projects, tiers, type Project, type Tier } from "@/lib/data";

type Filter = "all" | Tier;

export default function WorkBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? projects : projects.filter((p) => p.tier === filter);
  const activeTier = tiers.find((t) => t.id === filter);
  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: projects.length },
    ...tiers.map((t) => ({ id: t.id as Filter, label: t.title, count: projects.filter((p) => p.tier === t.id).length })),
  ];

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (selected && !d.open) d.showModal();
    if (!selected && d.open) d.close();
  }, [selected]);

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2 border-b border-line pb-1">
        {filters.map((f) => {
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(f.id)}
              className={`relative px-3 pb-3 pt-2 text-[0.95rem] transition-colors ${on ? "text-ink" : "text-muted hover:text-ink"}`}
            >
              {f.label} <span className="ml-1 tabular-nums opacity-60">{f.count}</span>
              {on && <motion.span layoutId="work-tab" className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
            </button>
          );
        })}
      </div>

      <p className="mt-6 min-h-[1.75rem] text-muted" aria-live="polite">
        {activeTier ? activeTier.text : "Every project, from full CRM systems to websites."}
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <Spot className="h-full">
              <button type="button" onClick={() => setSelected(p)} aria-haspopup="dialog" className="flex h-full w-full flex-col gap-4 p-4 text-left">
                <ProjectArt project={p} />
                <div className="px-2 pb-2">
                  <p className="text-sm text-accent">{p.kind}</p>
                  <p className="mt-1 font-display text-2xl font-semibold">{p.name}</p>
                  <p className="mt-2 text-[0.95rem] text-muted">{p.summary}</p>
                </div>
              </button>
            </Spot>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/75"
      >
        {selected && <Detail project={selected} onClose={() => dialogRef.current?.close()} />}
      </dialog>
    </>
  );
}

function Detail({ project: p, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-accent">
            {p.kind} for {p.client}
          </p>
          <h2 id="project-dialog-title" className="mt-1 font-display text-4xl font-semibold">
            {p.name}
          </h2>
        </div>
        <button type="button" onClick={onClose} className="shrink-0 rounded-full border border-line px-4 py-1.5 text-sm hover:border-ink">
          Close
        </button>
      </div>
      <div className="mt-6">
        <ProjectArt project={p} variant="full" />
      </div>
      <p className="mt-6 text-muted">{p.description}</p>
      <ul className="mt-5 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-ink/90">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/work/${p.slug}`} className="rounded-full bg-ink px-5 py-2.5 font-semibold text-paper hover:bg-accent">
          Case study
        </Link>
        {p.url && (
          <a href={`https://${p.url}`} target="_blank" rel="noopener" className="rounded-full border border-line px-5 py-2.5 font-semibold hover:border-ink">
            Visit {p.url}
          </a>
        )}
      </div>
    </div>
  );
}
