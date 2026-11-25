"use client";

import { motion, useReducedMotion } from "framer-motion";

// A label that drifts gently over the hero photo.
export default function Chip({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`absolute z-10 rounded-full border border-line bg-raised/90 px-4 py-2 text-sm font-medium shadow-2xl backdrop-blur ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 },
      }}
    >
      {children}
    </motion.span>
  );
}
