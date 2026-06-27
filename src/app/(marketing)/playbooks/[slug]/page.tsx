import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { buildSEO } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { absoluteUrl, urls } from "@/lib/urls";
import { getPlaybookBySlug, getAllPlaybookSlugs } from "@/lib/content";
import { Schema } from "@/components/seo/Schema";
import { formatDate } from "@/lib/date";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPlaybookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);
  if (!playbook) return {};
  return buildSEO({
    title: playbook.title,
    description: playbook.description,
    path: urls.playbook(slug),
    ogImage: playbook.ogImage,
    type: "article",
    publishedAt: playbook.publishedAt,
    updatedAt: playbook.updatedAt,
  });
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);
  if (!playbook) notFound();

  const schema = articleSchema({
    title: playbook.title,
    description: playbook.description,
    url: absoluteUrl(urls.playbook(slug)),
    publishedAt: playbook.publishedAt,
    updatedAt: playbook.updatedAt,
    authorName: playbook.author,
    ogImage: playbook.ogImage,
  });

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Schema data={schema} />

      {/* ── Post Hero ── */}
      <header
        style={{
          background: "radial-gradient(120% 90% at 0% 0%, #F1EFFC 0%, rgba(241,239,252,0.4) 40%, #ffffff 68%)",
          padding: "clamp(48px, 7vw, 80px) clamp(16px, 4vw, 24px)",
          paddingTop: "calc(clamp(48px, 7vw, 80px) + 72px)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Category tag */}
          <span
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b7280",
              background: "rgba(0,0,0,0.05)",
              borderRadius: 100,
              padding: "5px 12px",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            {playbook.category}
          </span>

          {/* Title */}
          <h1
            style={{
              margin: "0 0 clamp(20px, 2.8vw, 30px)",
              fontSize: "clamp(28px, 4.2vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#15191d",
            }}
          >
            {playbook.title}
          </h1>

          {/* Meta — author · date · reading time */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#15191d" }}>
              {playbook.author}
            </span>
            <MetaDot />
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
              {formatDate(playbook.publishedAt)}
            </span>
            <MetaDot />
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
              {playbook.readingTime}
            </span>
          </div>

        </div>
      </header>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #e7e7e2", margin: 0 }} />

      {/* ── Post Body ── */}
      <div style={{ padding: "clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)" }}>
        <article className="post-prose" style={{ maxWidth: 680, margin: "0 auto" }}>
          <MDXRemote source={playbook.content} />
        </article>
      </div>

      {/* ── Post Footer ── */}
      <footer
        style={{
          borderTop: "1px solid #e7e7e2",
          padding: "clamp(36px, 5vw, 56px) clamp(16px, 4vw, 24px)",
          textAlign: "center",
        }}
      >
        <Link
          href="/playbooks"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            color: "#15191d",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
          className="back-link"
        >
          <span className="back-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#15191d" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
          </span>
          Back to all posts
        </Link>
      </footer>

      <style>{`
        /* ── Post prose typography ── */
        .post-prose p {
          margin: 0 0 1.6em;
          font-size: clamp(1rem, 1.15vw, 1.1rem);
          line-height: 1.8;
          color: #374151;
        }
        .post-prose h2 {
          margin: 2.4em 0 0.8em;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 400;
          letter-spacing: -0.025em;
          color: #15191d;
        }
        .post-prose h3 {
          margin: 2em 0 0.6em;
          font-size: clamp(17px, 1.6vw, 22px);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #15191d;
        }
        .post-prose ul,
        .post-prose ol {
          margin: 0 0 1.6em;
          padding-left: 1.4em;
        }
        .post-prose li {
          font-size: clamp(1rem, 1.15vw, 1.1rem);
          line-height: 1.8;
          color: #374151;
          margin-bottom: 0.5em;
        }
        .post-prose strong { font-weight: 700; color: #15191d; }
        .post-prose blockquote {
          margin: 2.4em 0;
          padding: 28px 32px;
          border-left: 3px solid #f5c518;
          background: #f9f8f5;
          border-radius: 0 10px 10px 0;
        }
        .post-prose blockquote p {
          margin: 0 !important;
          font-size: clamp(17px, 1.6vw, 22px) !important;
          font-weight: 300 !important;
          line-height: 1.5 !important;
          letter-spacing: -0.02em;
          color: #15191d !important;
        }

        /* ── Back link hover ── */
        .back-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #e7e7e2;
          display: inline-grid;
          place-items: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .back-link:hover .back-circle {
          background: #f5c518;
          border-color: #f5c518;
          transform: translateX(-3px);
        }
      `}</style>
    </div>
  );
}

function MetaDot() {
  return (
    <span
      style={{
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: "#e7e7e2",
        flexShrink: 0,
        display: "inline-block",
      }}
    />
  );
}
