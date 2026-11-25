"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;

// Headline that rises word by word from behind a mask on page load.
export default function Words({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className={`inline-block overflow-hidden pb-[0.14em] align-top -mb-[0.14em] ${i < words.length - 1 ? "mr-[0.26em]" : ""}`}>
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease, delay: delay + i * 0.08 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
