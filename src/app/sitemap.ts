import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/urls";
import { getAllPlaybooks } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const playbooks = getAllPlaybooks();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/playbooks`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const playbookRoutes: MetadataRoute.Sitemap = playbooks.map((p) => ({
    url: `${SITE_URL}/playbooks/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...playbookRoutes];
}
