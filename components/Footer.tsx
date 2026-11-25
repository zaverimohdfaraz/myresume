import Link from "next/link";
import { profile } from "@/lib/data";
import { sitePages } from "@/lib/pages";
import Reveal from "@/components/motion/Reveal";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-40 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <Reveal>
          <p className="font-display text-[clamp(3.5rem,14vw,12rem)] font-semibold leading-[0.85] tracking-tighter">{profile.name}</p>
        </Reveal>
        <div className="mt-16 grid gap-10 text-[0.95rem] sm:grid-cols-3">
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
          <ul className="grid content-start gap-2 text-base">
            <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="hover:text-accent" href={profile.phoneHref}>{profile.phone}</a></li>
            <li className="text-muted">{profile.location}</li>
          </ul>
          <ul className="flex flex-wrap content-start gap-x-6 gap-y-2 text-base">
            <li><a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            {/* <li><a className="hover:text-accent" href={profile.github} target="_blank" rel="noopener">GitHub</a></li> */}
            <li><a className="hover:text-accent" href={profile.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
          </ul>
        </div>
        <p className="mt-16 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
