// All absolute URLs are built from this base — never hardcode elsewhere
export const SITE_URL = "https://lecturehead.com";

export const urls = {
  home: "/",
  playbooks: "/playbooks",
  playbook: (slug: string) => `/playbooks/${slug}`,

  // Future pages — add here as you build them
  // pricing: "/pricing",
  // features: "/features",
  // about: "/about",
} as const;

/** Returns a fully-qualified URL for use in metadata, schema, sitemaps */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
