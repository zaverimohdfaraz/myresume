"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data";

// Two stages only: Brief and Live. Cards move from Brief to Live on their own, and back again once too many are Live.
const MAX_LIVE = 4;
const TICK_MS = 2600;
const CARDS = projects.slice(0, 6);

type Board = { live: boolean[]; cursor: number };

export function step({ live, cursor }: Board): Board {
  const n = live.length;
  const next = [...live];
  if (next.filter(Boolean).length >= MAX_LIVE) {
    next[next.indexOf(true)] = false;
    return { live: next, cursor };
  }
  for (let k = 0; k < n; k++) {
    const i = (cursor + k) % n;
    if (!next[i]) {
      next[i] = true;
      return { live: next, cursor: (i + 1) % n };
    }
  }
  return { live: next, cursor };
}

export default function Board() {
  const reduce = useReducedMotion();
  const [board, setBoard] = useState<Board>({ live: [false, true, false, true, false, false], cursor: 0 });
  const paused = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!paused.current) setBoard((b) => step(b));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  function toggle(i: number) {
    setBoard((b) => {
      const live = [...b.live];
      live[i] = !live[i];
      return { ...b, live };
    });
  }

  const totals = [0, 0];
  const rowIndex = board.live.map((on) => totals[on ? 1 : 0]++);

  return (
    <div
      role="group"
      aria-label="Project board. Cards move on their own. Click a card to move it."
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
    >
      <p className="px-1 text-sm font-semibold text-muted" style={{ gridColumn: 1, gridRow: 1 }}>
        Brief <span className="tabular-nums opacity-70">{totals[0]}</span>
      </p>
      <p className="px-1 text-sm font-semibold text-muted" style={{ gridColumn: 2, gridRow: 1 }}>
        Live <span className="tabular-nums opacity-70">{totals[1]}</span>
      </p>
      {CARDS.map((p, i) => {
        const on = board.live[i];
        return (
          <motion.button
            key={p.slug}
            layout
            type="button"
            onClick={() => toggle(i)}
            aria-label={`${p.name}, ${on ? "Live" : "Brief"}. Click to move.`}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
            style={{ gridColumn: on ? 2 : 1, gridRow: rowIndex[i] + 2 }}
            className={`rounded-xl border p-3 text-left transition-colors ${
              on ? "border-accent/60 bg-raised" : "border-line bg-paper hover:border-ink/40"
            }`}
          >
            <span className="flex items-center justify-between gap-2 text-xs text-muted">
              <span>{p.kind}</span>
              {on && (
                <span aria-hidden className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              )}
            </span>
            <span className="mt-1.5 block text-sm font-semibold leading-snug">{p.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
