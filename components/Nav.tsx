"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { sitePages } from "@/lib/pages";
import { profile } from "@/lib/data";

export default function Nav() {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-full border border-line bg-paper/75 px-3 py-2 backdrop-blur-xl">
        <Link href="/" className="pl-3 font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="flex min-w-0 items-center gap-1 overflow-x-auto">
          {sitePages.map((l) => {
            const active = path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-[0.95rem] transition-colors ${active ? "text-paper" : "text-muted hover:text-ink"}`}
              >
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </nav>
        <a href={profile.resume} target="_blank" rel="noopener" className="shrink-0 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-paper hover:brightness-110">
          Resume
        </a>
        <motion.span aria-hidden style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-px origin-left bg-accent" />
      </div>
    </header>
  );
}
