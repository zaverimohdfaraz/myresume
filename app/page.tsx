import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Words from "@/components/motion/Words";
import TiltCard from "@/components/motion/TiltCard";
import Magnetic from "@/components/motion/Magnetic";
import Chip from "@/components/motion/Chip";
import Marquee from "@/components/motion/Marquee";
import Flow, { type Step } from "@/components/Flow";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import { experience, profile, projects, skills } from "@/lib/data";

const heroIntro =
  "I design and build custom CRM systems for businesses. Enquiries from your website, quotations, sales, purchases and payments, team roles and permissions, automatic email reminders and reports all live in one system. Each CRM is built around how your team already works, using Next.js, Node.js, MongoDB and Laravel, along with the public website that feeds it.";

const flow: Step[] = [
  {
    title: "Enquiry",
    text: "Enquiry and quote forms on your website send each lead straight into the CRM, with the client's details and their message attached.",
  },
  {
    title: "Quotation",
    text: "Each enquiry gets its own quotation, tracked until it is accepted or closed, so no quote gets lost in someone's inbox.",
  },
  {
    title: "Sale and payment",
    text: "Sales, purchases and payments are recorded against the client, and every change adds an entry to the activity log automatically.",
  },
  {
    title: "Team workflow",
    text: "Separate pipelines for sales, social media or case management, with role-based access and SLA escalations when work runs late.",
  },
  {
    title: "Follow-up",
    text: "Automatic email reminders for open tasks, plus reports so the owner can see where every client and every team stands.",
  },
];

export default function Home() {
  // Projects with a screenshot lead the gallery, since they carry the most visual weight.
  const showcase = [...projects].sort((a, b) => Number(!!b.image) - Number(!!a.image)).slice(0, 6);
  const tools = Array.from(new Set(skills.flatMap((g) => g.items))).slice(0, 18);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-28 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <div>
          <Reveal>
            <p className="text-muted">
              {profile.role} at Nexora Solutions, building CRMs in {profile.location}
            </p>
          </Reveal>
          <h1 className="mt-6 text-[3.25rem] font-semibold sm:text-7xl lg:text-[5.25rem]">
            <Words text="Custom CRMs that run the way your business does." delay={0.15} />
          </h1>
          <Reveal delay={0.9}>
            <p className="mt-8 max-w-xl text-lg text-muted">{heroIntro}</p>
          </Reveal>
          <Reveal delay={1.05}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link href="/work" className="inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-paper hover:brightness-110">
                  See the work
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/contact" className="inline-block rounded-full border border-line px-7 py-3.5 font-semibold hover:border-ink">
                  Start a project
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem]">
          <TiltCard className="aspect-[4/5]">
            <Image src={profile.photo} alt={profile.name} fill priority sizes="(min-width: 1024px) 30rem, 90vw" className="object-cover" />
            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{ background: "linear-gradient(to top, #07080a 8%, rgba(7,8,10,0.5) 45%, transparent)" }}
            >
              <p className="font-display text-2xl font-semibold">{profile.name}</p>
              <p className="text-sm text-muted">Mumbai, India</p>
            </div>
          </TiltCard>
          <Chip className="-left-2 top-14 sm:-left-8" delay={1.2}>Next.js</Chip>
          <Chip className="-right-2 top-1/2 sm:-right-6" delay={1.4}>MongoDB</Chip>
          <Chip className="-left-2 bottom-24 sm:-left-4" delay={1.6}>Laravel</Chip>
        </div>
      </section>

      <Marquee items={tools} />

      {/* How the work flows */}
      <section className="mx-auto max-w-7xl px-5 py-32 sm:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-5xl font-semibold sm:text-7xl">How a CRM I build handles a client, from first enquiry to final payment.</h2>
        </Reveal>
        <div className="mt-24">
          <Flow steps={flow} />
        </div>
      </section>

      {/* Selected work */}
      <section aria-labelledby="selected" className="py-16">
        <div className="mx-auto mb-14 flex max-w-7xl flex-wrap items-end justify-between gap-6 px-5 sm:px-8">
          <Reveal>
            <h2 id="selected" className="text-5xl font-semibold sm:text-7xl">
              Selected work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg text-muted">
              CRMs for a marine operations company and an immigration agency, plus websites and CMS platforms for institutions and businesses.
            </p>
          </Reveal>
          <Link href="/work" className="text-muted underline decoration-line underline-offset-8 hover:text-ink">
            All {projects.length} projects
          </Link>
        </div>
        <Gallery items={showcase} />
      </section>

      {/* Experience */}
      <section aria-labelledby="career" className="mx-auto max-w-5xl px-5 py-32 sm:px-8">
        <Reveal>
          <h2 id="career" className="mb-24 text-5xl font-semibold sm:text-7xl">
            Where I&apos;ve worked, and what I built there
          </h2>
        </Reveal>
        <Timeline items={experience.slice(0, 2)} />
        <Reveal>
          <Link href="/experience" className="mt-24 inline-block text-lg underline decoration-accent underline-offset-8 hover:text-accent">
            Full career history
          </Link>
        </Reveal>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-8 py-20 sm:px-16 sm:py-28">
          <h2 className="max-w-4xl text-5xl font-semibold sm:text-8xl">
            <Words text="Have a CRM or website in mind?" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-muted">
              Tell me how your team works today, which tools you use now, and which steps you want automated. I reply within a day with what I would build and how long it would take.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <Magnetic>
                <Link href="/contact" className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-semibold text-paper hover:brightness-110">
                  Tell me about it
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
