import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import Words from "@/components/motion/Words";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <h1 className="text-[3.5rem] font-semibold sm:text-8xl">
        <Words text="Work" />
      </h1>
      <Reveal delay={0.3}>
        <p className="mt-6 max-w-2xl text-lg text-muted">CRMs, platforms and websites, grouped by how much they ask of the system behind them.</p>
      </Reveal>
      <div className="mt-14">
        <WorkGrid />
      </div>
    </section>
  );
}
