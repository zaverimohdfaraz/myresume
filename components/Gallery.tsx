"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ProjectArt from "@/components/ProjectArt";
import type { Project } from "@/lib/data";

// Scroll down and the row of projects slides sideways while the heading stays put.
export default function Gallery({ items }: { items: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const travel = Math.round((1 - 1.5 / items.length) * 100);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${travel}%`]);

  if (reduce) {
    return (
      <ul className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        {items.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="block rounded-3xl border border-line bg-surface p-4">
              <ProjectArt project={p} variant="full" />
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={ref} style={{ height: `${items.length * 55}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.ul style={{ x }} className="flex w-max gap-6 pl-[max(1.25rem,calc((100vw-80rem)/2))] pr-10">
          {items.map((p) => (
            <li key={p.slug} className="w-[min(72vw,40rem)] shrink-0">
              <Link href={`/work/${p.slug}`} className="group block h-full rounded-3xl border border-line bg-surface p-4 transition-colors hover:border-accent/40">
                <ProjectArt project={p} variant="full" />
                <div className="px-2 pb-2 pt-6">
                  <p className="text-sm text-accent">{p.kind}</p>
                  <p className="mt-1 font-display text-3xl font-semibold">{p.name}</p>
                  <p className="mt-2 max-w-xl text-muted">{p.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
