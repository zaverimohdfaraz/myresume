// Endless ticker of tools. The list is doubled so the loop is seamless.
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group overflow-hidden border-y border-line py-7" role="region" aria-label="Tools I use">
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} aria-hidden={i >= items.length} className="font-display text-4xl font-semibold text-muted/60 transition-colors hover:text-accent sm:text-5xl">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
