"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type Step = { title: string; text: string };

// A horizontal process. The connecting line fills as the section scrolls into view.
export default function Flow({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 50%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-line md:block" />
      <motion.div aria-hidden style={{ scaleX: fill, transformOrigin: "left" }} className="absolute left-6 right-6 top-6 hidden h-px bg-accent md:block" />
      <ol className="grid gap-12 md:grid-cols-5 md:gap-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-paper">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <p className="mt-8 font-display text-3xl font-semibold">{s.title}</p>
            <p className="mt-3 max-w-xs text-muted">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
