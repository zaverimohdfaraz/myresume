"use client";

import { useEffect } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

// A soft light that follows the pointer across the whole page.
export default function Glow() {
  const reduce = useReducedMotion();
  const x = useSpring(-600, { stiffness: 90, damping: 26 });
  const y = useSpring(-600, { stiffness: 90, damping: 26 });

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[560px] w-[560px] rounded-full"
      style={{
        x,
        y,
        marginLeft: -280,
        marginTop: -280,
        background: "radial-gradient(closest-side, rgba(76,194,255,0.13), transparent)",
      }}
    />
  );
}
