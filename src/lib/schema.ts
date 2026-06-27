import { SITE_URL } from "./urls";

// ─── Organization ─────────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LectureHead",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/lh%20logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/lecturehead/",
      "https://www.instagram.com/lectureheadofficial/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      // email: "support@lecturehead.com",
    },
  };
}

// ─── SoftwareApplication (important for SaaS SEO) ────────────────────────────

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LectureHead",
    applicationCategory: "EducationApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "LectureHead is an online course platform for creators, coaches, and educators to sell courses, run live cohorts and community, and keep 100% of their revenue with 0% commission.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "4199",
      highPrice: "13799",
      priceCurrency: "INR",
      offerCount: "3",
    },
    // aggregateRating: {           // Uncomment once you have reviews
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "124",
    // },
  };
}

// ─── Article (for Playbook posts) ─────────────────────────────────────────────

interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  ogImage?: string;
}

export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  authorName,
  ogImage,
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "LectureHead",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logos/lh%20logo.png`,
      },
    },
    ...(ogImage && {
      image: {
        "@type": "ImageObject",
        url: ogImage,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
