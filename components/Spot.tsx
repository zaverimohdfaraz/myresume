"use client";

// A card whose border and inner light follow the pointer.
export default function Spot({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/50 ${className}`}
    >
      <div aria-hidden className="spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
