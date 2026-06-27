import type { Metadata } from "next";
import { SITE_URL, absoluteUrl, INDEXING_ENABLED } from "./urls";

const SITE_NAME = "LectureHead";
const DEFAULT_TITLE = "Online Course Platform for Creators — LectureHead";
const DEFAULT_DESCRIPTION =
  "The all-in-one online course platform for creators, coaches & educators. Sell courses, run live cohorts & community, and keep 100% of your revenue — 0% commission.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/usable-images/OG%20Image.png`;

interface BuildSEOOptions {
  title?: string;
  description?: string;
  path: string;          // e.g. "/" or "/playbooks/how-to-flip-classroom"
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
}

/**
 * Central metadata builder — use in every page's generateMetadata().
 * Returns a fully-typed Next.js Metadata object.
 */
export function buildSEO({
  title,
  description,
  path,
  ogImage,
  noindex = false,
  type = "website",
  publishedAt,
  updatedAt,
}: BuildSEOOptions): Metadata {
  const resolvedTitle = title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl = absoluteUrl(path);
  const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: canonicalUrl,
    },

    // Force noindex everywhere unless explicitly enabled on the real
    // production domain — keeps preview/staging deploys out of search.
    robots: noindex || !INDEXING_ENABLED
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },

    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      images: [{ url: resolvedOgImage, width: 1200, height: 630, alt: resolvedTitle }],
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
    },

    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedOgImage],
      // site: "@lecturehead", // uncomment when you have a Twitter handle
    },
  };
}
