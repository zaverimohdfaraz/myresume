import Link from "next/link";
import { profile } from "@/lib/data";
import { sitePages } from "@/lib/pages";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8">
        <p className="font-display text-[clamp(3rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tighter">{profile.name}</p>
        <div className="mt-12 grid gap-10 text-sm sm:grid-cols-3">
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-base">
              <li><Link className="hover:text-accent" href="/">Home</Link></li>
              {sitePages.map((p) => (
                <li key={p.href}>
                  <Link className="hover:text-accent" href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="grid gap-2 text-base">
            <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="hover:text-accent" href={profile.phoneHref}>{profile.phone}</a></li>
            <li className="text-muted">{profile.location}</li>
          </ul>
          <ul className="flex flex-wrap content-start gap-x-6 gap-y-2 text-base">
            <li><a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a className="hover:text-accent" href={profile.github} target="_blank" rel="noopener">GitHub</a></li>
            <li><a className="hover:text-accent" href={profile.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
          </ul>
        </div>
        <p className="mt-16 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
