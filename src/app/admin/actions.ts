"use server";

import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";
import { getKeywordVolumes, type KeywordResult } from "@/lib/dataforseo";
import { getAllPlaybooks } from "@/lib/content";
import { pingIndexNow } from "@/lib/indexnow";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MDX_GUIDELINES = `
You are an SEO content editor for LectureHead, an LMS platform. Convert a raw newsletter script into a polished, SEO-optimized blog post in MDX format.

STRICT RULES:

FRONTMATTER (use EXACTLY the title and slug provided to you — do not change them):
- title: Use the exact title provided
- description: 120–160 characters. Compelling, includes the target keyword.
- slug: Use the exact slug provided
- author: Always "Agnel John D"
- publishedAt: Use the date provided
- category: 1–2 words ONLY, title case, based strictly on the core topic of the post. Do not default to "Founder Playbook". Pick the word(s) that best describe what the post is actually about. Examples: "Leverage", "Trust", "Pricing", "Community", "Content", "Growth", "Sales", "Marketing", "Retention", "Teaching", "Mindset", "Productivity". Choose the most specific fit.
- tags: 4–6 relevant lowercase tags as a JSON array
- featured: true

CONTENT RULES:
- Remove ALL newsletter formatting: no "Hey,", no sign-offs, no "forward this", no subject lines, no preview text
- 3–4 H2s maximum. One H2 per ~250 words.
- Primary keyword must appear naturally in the body within the first 200 words
- No statistics or percentage claims without a real citation — rewrite as firsthand observations
- No H1 in body — the title is the H1
- Keep strong opening hooks
- End with EXACTLY this CTA, nothing else after it:
  ---
  *Want to keep reading? Head back to the [Playbooks](/playbooks) for more.*

OUTPUT: Return ONLY the raw MDX content. No explanation. No code fences. Start with ---.
`;

async function extractKeywords(content: string): Promise<string[]> {
  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: `Extract exactly 10 keyword phrases (2–5 words each) from this content that someone might search for on Google. Focus on the core topic. Return ONLY a JSON array of strings.\n\nContent:\n${content.slice(0, 2000)}`,
    }],
  });
  const text = (msg.content[0] as { text: string }).text.trim();
  try { return JSON.parse(text); }
  catch { const m = text.match(/\[[\s\S]*\]/); return m ? JSON.parse(m[0]) : []; }
}

function pickBestKeyword(results: KeywordResult[], existingTitles: string[]): KeywordResult | null {
  const withVolume = results.filter((r) => r.searchVolume > 0);
  if (!withVolume.length) return results[0] ?? null;
  const safe = withVolume.filter((r) => {
    const kw = r.keyword.toLowerCase();
    return !existingTitles.some((t) => t.includes(kw) || kw.includes(t.split(" ")[0]));
  });
  return (safe.length ? safe : withVolume).sort((a, b) => b.searchVolume - a.searchVolume)[0];
}

async function generateOptions(
  rawContent: string,
  keyword: KeywordResult,
  existingSlugs: string[]
): Promise<{ titles: string[]; slugs: string[] }> {
  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    messages: [{
      role: "user",
      content: `You are an SEO specialist. Based on this content and target keyword, generate exactly 3 title options and 3 slug options.

Target keyword: "${keyword.keyword}" (${keyword.searchVolume} monthly searches)

TITLE RULES:
- Each title must be 50–60 characters
- Must include or closely relate to the target keyword
- Should be compelling and search-friendly
- All 3 must be meaningfully different angles

SLUG RULES:
- Each slug must be 3–5 words, lowercase, hyphens only
- NO stop words (no: a, an, the, to, in, of, for, from, what, how, why, is, are, that, with, and, but, or)
- Must contain the target keyword in compressed form
- Must NOT be any of these already-used slugs: ${existingSlugs.join(", ")}
- All 3 must be different

Return ONLY valid JSON in this exact format:
{
  "titles": ["Title One", "Title Two", "Title Three"],
  "slugs": ["slug-one", "slug-two", "slug-three"]
}

Content summary:
${rawContent.slice(0, 1500)}`,
    }],
  });

  const text = (msg.content[0] as { text: string }).text.trim();
  try { return JSON.parse(text); }
  catch { const m = text.match(/\{[\s\S]*\}/); return m ? JSON.parse(m[0]) : { titles: [], slugs: [] }; }
}

async function generateMDX(
  rawContent: string,
  title: string,
  slug: string,
  keyword: KeywordResult,
  publishedAt: string
): Promise<string> {
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: MDX_GUIDELINES,
    messages: [{
      role: "user",
      content: `Title to use: "${title}"
Slug to use: "${slug}"
Target keyword: "${keyword.keyword}" (${keyword.searchVolume} monthly searches)
Today's date: ${publishedAt}

Raw content:
${rawContent}`,
    }],
  });
  return (msg.content[0] as { text: string }).text.trim();
}

// ─── Step 1: Analyze ─────────────────────────────────────────────────────────

export interface AnalysisResult {
  titles: string[];
  slugs: string[];
  keyword: string;
  volume: number;
  rawContent: string;
  error?: string;
}

export async function analyzeContent(
  _prev: unknown,
  formData: FormData
): Promise<AnalysisResult> {
  const password = formData.get("password") as string;
  const rawContent = formData.get("content") as string;

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: "Invalid password.", titles: [], slugs: [], keyword: "", volume: 0, rawContent: "" };
  }
  if (!rawContent?.trim()) {
    return { error: "Content cannot be empty.", titles: [], slugs: [], keyword: "", volume: 0, rawContent: "" };
  }

  try {
    const candidates = await extractKeywords(rawContent);
    const volumes = await getKeywordVolumes(candidates);
    const existing = getAllPlaybooks();
    const existingTitles = existing.map((p) => p.title.toLowerCase());
    const existingSlugs = existing.map((p) => p.slug);

    const best = pickBestKeyword(volumes, existingTitles) ?? {
      keyword: candidates[0] ?? "content strategy",
      searchVolume: 0, competition: 0, cpc: 0,
    };

    const { titles, slugs } = await generateOptions(rawContent, best, existingSlugs);

    return {
      titles,
      slugs,
      keyword: best.keyword,
      volume: best.searchVolume,
      rawContent,
    };
  } catch (err) {
    console.error("[Admin] Analyze error:", err);
    return {
      error: err instanceof Error ? err.message : "Analysis failed.",
      titles: [], slugs: [], keyword: "", volume: 0, rawContent: "",
    };
  }
}

// ─── Step 2: Publish ─────────────────────────────────────────────────────────

export interface PublishResult {
  success?: boolean;
  title?: string;
  slug?: string;
  error?: string;
}

export async function publishPost(
  _prev: unknown,
  formData: FormData
): Promise<PublishResult> {
  const password = formData.get("password") as string;
  const rawContent = formData.get("rawContent") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const keyword = formData.get("keyword") as string;
  const volume = Number(formData.get("volume") ?? 0);

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: "Invalid password." };
  }

  try {
    const publishedAt = new Date().toISOString();
    const mdxContent = await generateMDX(
      rawContent, title, slug,
      { keyword, searchVolume: volume, competition: 0, cpc: 0 },
      publishedAt
    );

    const filePath = path.join(process.cwd(), "src/content/playbooks", `${slug}.mdx`);
    fs.writeFileSync(filePath, mdxContent, "utf-8");

    // Ping search engines immediately after publish
    await pingIndexNow(slug);

    return { success: true, title, slug };
  } catch (err) {
    console.error("[Admin] Publish error:", err);
    return { error: err instanceof Error ? err.message : "Publish failed." };
  }
}
