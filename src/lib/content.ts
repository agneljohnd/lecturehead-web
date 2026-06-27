import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readingTime } from "./readingTime";

const PLAYBOOKS_DIR = path.join(process.cwd(), "src/content/playbooks");

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PlaybookFrontmatter {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  ogImage?: string;
}

export interface Playbook extends PlaybookFrontmatter {
  readingTime: string;
  content: string; // raw MDX string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMdxFiles(): string[] {
  return fs.readdirSync(PLAYBOOKS_DIR).filter((f) => f.endsWith(".mdx"));
}

/** Parses a single MDX file and returns a Playbook object */
function parsePlaybook(filename: string): Playbook {
  const filePath = path.join(PLAYBOOKS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...(data as PlaybookFrontmatter),
    readingTime: readingTime(content),
    content,
  };
}

/** Returns all playbooks, sorted newest first */
export function getAllPlaybooks(): Playbook[] {
  return getMdxFiles()
    .map(parsePlaybook)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/** Returns a single playbook by slug, or null if not found */
export function getPlaybookBySlug(slug: string): Playbook | null {
  const files = getMdxFiles();
  const filename = files.find((f) => {
    const { data } = matter(fs.readFileSync(path.join(PLAYBOOKS_DIR, f), "utf-8"));
    return data.slug === slug;
  });
  if (!filename) return null;
  return parsePlaybook(filename);
}

/** Returns all slugs — used in generateStaticParams */
export function getAllPlaybookSlugs(): string[] {
  return getMdxFiles().map((f) => {
    const { data } = matter(fs.readFileSync(path.join(PLAYBOOKS_DIR, f), "utf-8"));
    return data.slug as string;
  });
}

/** Returns related playbooks (same category, excluding current slug) */
export function getRelatedPlaybooks(currentSlug: string, category: string, limit = 3): Playbook[] {
  return getAllPlaybooks()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
