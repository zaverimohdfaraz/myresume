import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 pb-32 pt-24 sm:px-8">
      <h1 className="text-6xl font-semibold sm:text-8xl">Page not found.</h1>
      <p className="text-lg text-muted">The link may be old, or the page has moved.</p>
      <Link href="/" className="rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-accent">
        Back to home
      </Link>
    </section>
  );
}
