import Link from "next/link";
import Words from "@/components/motion/Words";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 pb-32 pt-28 sm:px-8">
      <h1 className="text-6xl font-semibold sm:text-8xl">
        <Words text="Page not found." />
      </h1>
      <p className="text-lg text-muted">The link may be old, or the page has moved.</p>
      <Link href="/" className="rounded-full bg-accent px-6 py-3 font-semibold text-paper hover:brightness-110">
        Back to home
      </Link>
    </section>
  );
}
