import Image from "next/image";
import type { Project } from "@/lib/data";

// The project's screenshot when there is one. Otherwise a typographic tile:
// "mark" shows the project's initials for lists, "full" shows its name for detail pages.
export default function ProjectArt({
  project: p,
  priority = false,
  variant = "mark",
}: {
  project: Project;
  priority?: boolean;
  variant?: "mark" | "full";
}) {
  if (p.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-paper">
        <Image
          src={p.image}
          alt={`Screenshot of ${p.name}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }
  const initials = p.name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <div className="flex aspect-[16/10] flex-col justify-between rounded-xl border border-line bg-paper p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-muted">{p.kind}</p>
        {p.url && <p className="truncate text-sm text-muted">{p.url}</p>}
      </div>
      {variant === "mark" ? (
        <p aria-hidden className="font-display text-7xl font-semibold leading-none tracking-tighter text-accent">
          {initials}
        </p>
      ) : (
        <p className="break-words font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl">{p.name}</p>
      )}
      <ul className="flex flex-wrap gap-2">
        {p.stack.slice(0, 3).map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
