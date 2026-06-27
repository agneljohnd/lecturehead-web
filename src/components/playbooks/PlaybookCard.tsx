import Link from "next/link";
import { urls } from "@/lib/urls";
import type { Playbook } from "@/lib/content";

interface PlaybookCardProps {
  playbook: Playbook;
}

export function PlaybookCard({ playbook }: PlaybookCardProps) {
  const { title, description, slug, publishedAt, category } = playbook;

  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={urls.playbook(slug)}
      style={{
        background: "transparent",
        borderRadius: 0,
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        border: "none",
        borderBottom: "2px solid #e7e7e2",
        padding: "0 clamp(12px, 3vw, 16px)",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
      className="playbook-card group"
    >
      {/* Body */}
      <div
        style={{
          padding: "0 0 clamp(20px, 2.4vw, 28px)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          flex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6b7280",
            background: "#E5E2FF",
            borderRadius: 100,
            padding: "4px 10px",
            alignSelf: "flex-start",
          }}
        >
          {category}
        </span>

        <h3
          style={{
            margin: 0,
            fontSize: "clamp(20px, 1.8vw, 24px)",
            fontWeight: 400,
            lineHeight: 1.28,
            letterSpacing: "-0.02em",
            color: "#15191d",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "#6b7280",
            flex: 1,
          }}
        >
          {description}
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 0 12px",
        }}
      >
        <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{date}</span>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "#1a1d20",
            color: "#fff",
            borderRadius: 40,
            padding: "10px 20px",
            transition: "background 0.2s, transform 0.2s",
          }}
          className="card-cta"
        >
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1,
            }}
          >
            READ MORE
          </span>
          <span style={{ display: "inline-grid", placeItems: "center", flexShrink: 0 }}>
            <ArrowIcon />
          </span>
        </span>
      </div>

      <style>{`
        .playbook-card:hover .card-cta {
          background: #2e3338;
          transform: translateY(-1px);
        }
      `}</style>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
