import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /blogs → /playbooks permanent redirect (SEO-safe 308)
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/playbooks",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/playbooks/:slug",
        permanent: true,
      },
    ];
  },

  // Allow MDX as pages (not used here, but future-proof)
  pageExtensions: ["ts", "tsx", "mdx"],

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
