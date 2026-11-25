import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the project root so a stray package-lock.json in a parent folder isn't picked up
  turbopack: { root: __dirname },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Links from the old single-page site keep working on the new pages
  async redirects() {
    return [
      { source: "/my-resume", destination: "/experience", permanent: true },
      { source: "/recent-work", destination: "/work", permanent: true },
      { source: "/resume", destination: "/resume/Faraz_Zaveri_Resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
