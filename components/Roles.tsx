"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Experience } from "@/lib/data";

export default function Roles({ items }: { items: Experience[] }) {
  const [active, setActive] = useState(0);
  const job = items[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
      <div role="tablist" aria-label="Roles" aria-orientation="vertical" className="flex flex-col">
        {items.map((j, i) => {
          const on = active === i;
          return (
            <button
              key={j.company + j.role}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`relative border-t border-line py-6 text-left transition-colors last:border-b ${on ? "text-ink" : "text-muted hover:text-ink"}`}
            >
              <span className="block font-display text-3xl font-semibold leading-tight sm:text-4xl">{j.company}</span>
              <span className="mt-1 block text-sm">
                {j.period}
              </span>
              {on && <span aria-hidden className="absolute -left-5 top-7 hidden h-8 w-1 rounded-full bg-accent lg:block" />}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="min-h-[20rem] lg:pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="text-sm text-accent">{job.period}</p>
            <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">{job.role}</h2>
            <p className="mt-2 text-lg text-muted">{job.company}</p>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {job.points.map((pt) => (
                <li key={pt} className="py-4 text-ink/85">
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
