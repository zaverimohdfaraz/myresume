import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Glow from "@/components/motion/Glow";

export const metadata: Metadata = {
  metadataBase: new URL("https://myresume-coral-five.vercel.app"),
  title: {
    default: "Faraz Zaveri | Full Stack Developer, Mumbai",
    template: "%s | Faraz Zaveri",
  },
  description:
    "Faraz Zaveri is a full stack developer in Mumbai building custom CRMs, CMS platforms and business websites with Next.js, Node.js and MongoDB.",
  openGraph: {
    title: "Faraz Zaveri | Full Stack Developer",
    description: "Custom CRMs, CMS platforms and business websites, built end to end.",
    images: ["/images/faraz-zaveri.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07080a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <Glow />
        <Nav />
        <main id="main" className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
