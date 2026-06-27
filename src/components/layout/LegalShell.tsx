interface LegalShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/**
 * Shared layout for legal pages (Privacy, Terms).
 * Mirrors the playbook page styling: purple radial header + prose body.
 */
export function LegalShell({ title, lastUpdated, children }: LegalShellProps) {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* ── Header ── */}
      <header
        style={{
          background:
            "radial-gradient(120% 90% at 0% 0%, #F1EFFC 0%, rgba(241,239,252,0.4) 40%, #ffffff 68%)",
          padding: "clamp(48px, 7vw, 80px) clamp(16px, 4vw, 24px)",
          paddingTop: "calc(clamp(48px, 7vw, 80px) + 72px)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(28px, 4.2vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#15191d",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: 0 }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      <hr style={{ border: "none", borderTop: "1px solid #e7e7e2", margin: 0 }} />

      {/* ── Body ── */}
      <div style={{ padding: "clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px)" }}>
        <article className="legal-prose" style={{ maxWidth: 680, margin: "0 auto" }}>
          {children}
        </article>
      </div>

      <style>{`
        .legal-prose p {
          margin: 0 0 1.4em;
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
        }
        .legal-prose h2 {
          margin: 2.2em 0 0.7em;
          font-size: clamp(19px, 1.9vw, 26px);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: #15191d;
        }
        .legal-prose h3 {
          margin: 1.8em 0 0.5em;
          font-size: clamp(16px, 1.5vw, 19px);
          font-weight: 600;
          letter-spacing: -0.015em;
          color: #15191d;
        }
        .legal-prose ul,
        .legal-prose ol {
          margin: 0 0 1.4em;
          padding-left: 1.3em;
        }
        .legal-prose li {
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 0.4em;
        }
        .legal-prose strong { font-weight: 600; color: #15191d; }
        .legal-prose a { color: #6633d1; text-decoration: underline; }
      `}</style>
    </div>
  );
}
