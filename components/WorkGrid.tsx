"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/motion/TiltCard";
import ProjectArt from "@/components/ProjectArt";
import { projects, tiers, type Project, type Tier } from "@/lib/data";

type Filter = "all" | Tier;

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible: Project[] = filter === "all" ? projects : projects.filter((p) => p.tier === filter);
  const activeTier = tiers.find((t) => t.id === filter);
  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: projects.length },
    ...tiers.map((t) => ({ id: t.id as Filter, label: t.title, count: projects.filter((p) => p.tier === t.id).length })),
  ];

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full border px-4 py-2 text-[0.95rem] transition-colors ${on ? "border-transparent text-paper" : "border-line text-muted hover:border-ink/40 hover:text-ink"}`}
            >
              {on && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-accent" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
              <span className="relative">
                {f.label} <span className="ml-1 tabular-nums opacity-60">{f.count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 min-h-[1.75rem] text-muted" aria-live="polite">
        {activeTier ? activeTier.text : "Every project, from full CRM systems to websites."}
      </p>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <TiltCard className="h-full">
                <Link href={`/work/${p.slug}`} className="flex h-full flex-col gap-5 p-4">
                  <ProjectArt project={p} />
                  <div className="px-2 pb-3">
                    <p className="text-sm text-accent">{p.kind}</p>
                    <p className="mt-1 font-display text-2xl font-semibold">{p.name}</p>
                    <p className="mt-2 text-[0.95rem] text-muted">{p.summary}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
