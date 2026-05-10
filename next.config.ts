import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https: blob:",
            "font-src 'self' https: data:",
            "connect-src 'self' https://api.resend.com",
            "frame-ancestors 'none'",
            "form-action 'self'",
          ].join("; "),
        },
      ],
    },
    {
      source: "/assets/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/(.*).(jpg|jpeg|png|webp|avif|svg|ico)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
  redirects: async () => [
    {
      source: "/a-propos-de-nous",
      destination: "/a-propos",
      permanent: true,
    },
    {
      source: "/nous-contacter",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/mentions",
      destination: "/mentions-legales",
      permanent: true,
    },
    {
      source: "/index.html",
      destination: "/",
      permanent: true,
    },
    {
      source: "/home",
      destination: "/",
      permanent: true,
    },
    {
      source: "/notre-histoire",
      destination: "/a-propos",
      permanent: true,
    },
    {
      source: "/nos-produits",
      destination: "/savoir-faire",
      permanent: true,
    },
    {
      source: "/commander",
      destination: "/commande",
      permanent: true,
    },
    // Trailing slash redirects
    {
      source: "/:path(/)/",
      destination: "/:path",
      permanent: true,
    },
    // www to non-www handled by Vercel
  ],
};

export default nextConfig;
