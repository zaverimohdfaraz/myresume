import type { Metadata } from "next";
import WorkBoard from "@/components/WorkBoard";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
      <h1 className="max-w-4xl text-6xl font-semibold sm:text-8xl">Work</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        CRMs, platforms and websites, grouped by how much they ask of the system behind them.
      </p>
      <div className="mt-14">
        <WorkBoard />
      </div>
    </section>
  );
}
