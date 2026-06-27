"use client";

import { useActionState, useState, useEffect } from "react";
import { analyzeContent, publishPost, type AnalysisResult, type PublishResult } from "./actions";

const emptyAnalysis: AnalysisResult = { titles: [], slugs: [], keyword: "", volume: 0, rawContent: "" };
const emptyPublish: PublishResult = {};

export default function AdminPage() {
  const [analyzeState, analyzeAction, isAnalyzing] = useActionState<AnalysisResult, FormData>(analyzeContent, emptyAnalysis);
  const [publishState, publishAction, isPublishing] = useActionState<PublishResult, FormData>(publishPost, emptyPublish);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  const [password, setPassword] = useState("");

  const hasAnalysis = analyzeState.titles.length > 0;
  const isPublished = publishState.success === true;

  // Auto-select first options when analysis arrives
  useEffect(() => {
    if (analyzeState.titles.length > 0) setSelectedTitle(analyzeState.titles[0]);
    if (analyzeState.slugs.length > 0) setSelectedSlug(analyzeState.slugs[0]);
  }, [analyzeState.titles, analyzeState.slugs]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f1117",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "60px 20px",
      fontFamily: "Inter, system-ui, sans-serif",
    }}>
      <div style={{ width: "100%", maxWidth: 720 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", color: "#4b5563", textTransform: "uppercase", marginBottom: 10 }}>
            LectureHead Admin
          </p>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 300, color: "#f9fafb", letterSpacing: "-0.03em", margin: "0 0 8px" }}>
            Playbook Publisher
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: 0 }}>
            Paste your raw script. Pick a title and slug. Publish.
          </p>
        </div>

        {/* ── Published ── */}
        {isPublished && (
          <div style={{ background: "#0d2818", border: "1px solid #166534", borderRadius: 12, padding: "28px 32px", marginBottom: 40 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#4ade80", textTransform: "uppercase", margin: "0 0 12px" }}>
              Published
            </p>
            <p style={{ fontSize: "1.1rem", color: "#f9fafb", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              {publishState.title}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: "0 0 20px" }}>
              /playbooks/{publishState.slug}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ background: "transparent", border: "1px solid #374151", borderRadius: 6, padding: "8px 16px", fontSize: "0.8rem", color: "#9ca3af", cursor: "pointer" }}
            >
              Publish another
            </button>
          </div>
        )}

        {/* ── Error ── */}
        {(analyzeState.error || publishState.error) && (
          <div style={{ background: "#1c0a0a", border: "1px solid #7f1d1d", borderRadius: 10, padding: "16px 20px", marginBottom: 28 }}>
            <p style={{ fontSize: "0.875rem", color: "#f87171", margin: 0 }}>
              {analyzeState.error || publishState.error}
            </p>
          </div>
        )}

        {/* ── Step 1: Input form ── */}
        {!isPublished && !hasAnalysis && (
          <form action={analyzeAction}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              <div>
                <Label>Admin Password</Label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <Label>Raw Script</Label>
                <textarea
                  name="content"
                  placeholder="Paste your raw newsletter script here..."
                  required
                  rows={22}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                />
              </div>

              <button type="submit" disabled={isAnalyzing} style={isAnalyzing ? btnDisabled : btnPrimary}>
                {isAnalyzing ? "Analyzing..." : "Analyze Content →"}
              </button>

              {isAnalyzing && (
                <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: 0 }}>
                  Extracting keywords → querying DataForSEO → generating options. ~10 seconds.
                </p>
              )}
            </div>
          </form>
        )}

        {/* ── Step 2: Pick title + slug ── */}
        {!isPublished && hasAnalysis && (
          <form action={publishAction}>

            {/* Hidden fields */}
            <input type="hidden" name="password" value={password} />
            <input type="hidden" name="rawContent" value={analyzeState.rawContent} />
            <input type="hidden" name="keyword" value={analyzeState.keyword} />
            <input type="hidden" name="volume" value={analyzeState.volume} />
            <input type="hidden" name="title" value={selectedTitle} />
            <input type="hidden" name="slug" value={selectedSlug} />

            {/* Keyword badge */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#4b5563", textTransform: "uppercase", marginBottom: 10 }}>
                Target Keyword
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#1a1d23", border: "1px solid #2d3139", borderRadius: 8, padding: "10px 16px" }}>
                <span style={{ fontSize: "0.9rem", color: "#f9fafb" }}>{analyzeState.keyword}</span>
                {analyzeState.volume > 0 && (
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#f5c518", background: "#2a2400", borderRadius: 4, padding: "2px 8px" }}>
                    {analyzeState.volume.toLocaleString()}/mo
                  </span>
                )}
              </div>
            </div>

            {/* Title options */}
            <div style={{ marginBottom: 36 }}>
              <Label>Choose a Title</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
                {analyzeState.titles.map((title) => (
                  <label
                    key={title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      background: selectedTitle === title ? "#1a2035" : "#1a1d23",
                      border: `1px solid ${selectedTitle === title ? "#3b5bdb" : "#2d3139"}`,
                      borderRadius: 10,
                      padding: "16px 18px",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                    }}
                  >
                    <input
                      type="radio"
                      name="titleRadio"
                      value={title}
                      checked={selectedTitle === title}
                      onChange={() => setSelectedTitle(title)}
                      style={{ marginTop: 3, accentColor: "#3b5bdb", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "0.95rem", color: "#f9fafb", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
                      {title}
                      <span style={{ display: "block", fontSize: "0.72rem", color: "#6b7280", marginTop: 4 }}>
                        {title.length} chars
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Slug options */}
            <div style={{ marginBottom: 40 }}>
              <Label>Choose a Slug</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
                {analyzeState.slugs.map((slug) => (
                  <label
                    key={slug}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: selectedSlug === slug ? "#1a2035" : "#1a1d23",
                      border: `1px solid ${selectedSlug === slug ? "#3b5bdb" : "#2d3139"}`,
                      borderRadius: 10,
                      padding: "14px 18px",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                    }}
                  >
                    <input
                      type="radio"
                      name="slugRadio"
                      value={slug}
                      checked={selectedSlug === slug}
                      onChange={() => setSelectedSlug(slug)}
                      style={{ accentColor: "#3b5bdb", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "#d1d5db", fontFamily: "monospace" }}>
                      /playbooks/<span style={{ color: "#f5c518" }}>{slug}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="submit" disabled={isPublishing} style={isPublishing ? btnDisabled : btnPrimary}>
                {isPublishing ? "Publishing..." : "Publish Post →"}
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{ background: "transparent", border: "1px solid #374151", borderRadius: 8, padding: "14px 20px", fontSize: "0.8rem", color: "#6b7280", cursor: "pointer" }}
              >
                Start over
              </button>
            </div>

            {isPublishing && (
              <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: 14 }}>
                Writing and saving your post. ~15 seconds.
              </p>
            )}
          </form>
        )}

      </div>
    </div>
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>
      {children}
    </p>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1a1d23",
  border: "1px solid #2d3139",
  borderRadius: 8,
  padding: "12px 16px",
  fontSize: "0.9rem",
  color: "#f9fafb",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

const btnPrimary: React.CSSProperties = {
  background: "#f5c518",
  color: "#0f1117",
  border: "none",
  borderRadius: 8,
  padding: "14px 28px",
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  cursor: "pointer",
};

const btnDisabled: React.CSSProperties = {
  ...btnPrimary,
  background: "#374151",
  color: "#9ca3af",
  cursor: "not-allowed",
};
