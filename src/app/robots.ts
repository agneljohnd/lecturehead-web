import type { MetadataRoute } from "next";
import { SITE_URL, INDEXING_ENABLED } from "@/lib/urls";

export default function robots(): MetadataRoute.Robots {
  // On any non-production deployment, block all crawling outright.
  if (!INDEXING_ENABLED) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
