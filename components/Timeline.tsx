"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import type { Experience } from "@/lib/data";

// The line draws itself as you scroll past the roles.
export default function Timeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <ol ref={ref} className="relative space-y-20">
      <div aria-hidden className="absolute bottom-2 left-[11px] top-2 w-px bg-line" />
      <motion.div aria-hidden style={{ scaleY: scrollYProgress, transformOrigin: "top" }} className="absolute bottom-2 left-[11px] top-2 w-px bg-accent" />
      {items.map((j, i) => (
        <li key={j.company + j.role} className="grid grid-cols-[1.5rem_1fr] gap-x-8 md:gap-x-12">
          <div className="flex justify-center pt-2">
            <span className="h-3 w-3 rounded-full border border-accent bg-paper" />
          </div>
          <Reveal delay={i * 0.05}>
            <p className="text-sm text-accent">{j.period}</p>
            <h3 className="mt-3 text-4xl font-semibold sm:text-5xl">{j.company}</h3>
            <p className="mt-2 text-lg text-muted">{j.role}</p>
            <ul className="mt-8 space-y-4 text-ink/85">
              {j.points.map((pt) => (
                <li key={pt} className="flex gap-4">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-muted" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
