import type { Metadata } from "next";
import Image from "next/image";
import { buildSEO } from "@/lib/seo";
import { getAllPlaybooks } from "@/lib/content";
import { PlaybookCard } from "@/components/playbooks/PlaybookCard";

export const metadata: Metadata = buildSEO({
  title: "Playbooks for Course Creators",
  description:
    "Practical guides on course creation, live classes, and community building for online creators, coaches, and educators — written by entrepreneurs who've built one.",
  path: "/playbooks",
});

export default function PlaybooksPage() {
  const playbooks = getAllPlaybooks();

  return (
    /* White page wrapper — overrides the #E5E5E5 body for this page */
    <div style={{ background: "#ffffff" }}>
      {/* ── Hero ── */}
      <main
        style={{
          minHeight: "auto",
          paddingTop: 140,
          paddingBottom: "clamp(40px, 6vw, 64px)",
          background:
            "radial-gradient(120% 90% at 0% 0%, #F1EFFC 0%, rgba(241,239,252,0.45) 38%, #ffffff 70%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 24px)",
          }}
        >
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 mb-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-slate-500">
            <span
              aria-hidden
              className="w-[9px] h-[9px] rounded-full flex-shrink-0"
              style={{
                background: "#f5c518",
                boxShadow: "0 0 0 4px rgba(245,197,24,0.18)",
              }}
            />
            The Journal
          </p>

          {/* Headline */}
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-outfit, Inter, sans-serif)",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.054em",
              color: "#15191d",
            }}
          >
            <span style={{ display: "block" }}>
              Winning Playbooks for Education
            </span>
            <span style={{ display: "block" }}>
              Business Owners.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "40ch",
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#6b7280",
            }}
          >
            Practical guides on course creation, live classes, and community
            building from entrepreneurs who&apos;ve actually built one
          </p>

          {/* Social proof */}
          <div style={{ marginTop: 24, maxWidth: 420 }}>
            <div className="flex items-center gap-[10px] flex-wrap mt-[18px]">
              {/* Avatars */}
              <span className="inline-flex items-center">
                {[
                  { src: "/images/faces/Epaphra.jpg", alt: "Epaphra" },
                  { src: "/images/faces/Arunachalam.jpg", alt: "Arunachalam" },
                  { src: "/images/faces/HR Navin.jpg", alt: "HR Navin" },
                  { src: "/images/faces/Thoufiq.jpg", alt: "Thoufiq" },
                  { src: "/images/faces/Shashank.jpg", alt: "Shashank" },
                ].map((face, i) => (
                  <span
                    key={face.alt}
                    className="face-avatar"
                    style={{ marginLeft: i === 0 ? 0 : -8, display: "inline-block", position: "relative" }}
                  >
                    <Image
                      src={face.src}
                      alt={face.alt}
                      width={28}
                      height={28}
                      style={{
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        objectFit: "cover",
                        width: 28,
                        height: 28,
                        display: "block",
                      }}
                    />
                  </span>
                ))}
              </span>

              {/* Stat */}
              <span className="flex flex-col">
                <span className="text-[0.875rem] font-bold text-[#15191d] leading-[1.15]">
                  5,467
                </span>
                <span className="text-[0.75rem] text-[#6b7280] leading-[1.2]">
                  people loved these posts
                </span>
              </span>

              {/* Divider */}
              <span
                aria-hidden
                className="hidden sm:block w-px h-[30px] bg-[#e7e7e2]"
              />

              {/* Rating */}
              <span className="flex flex-col">
                <span className="text-[0.875rem] font-bold text-[#15191d] leading-[1.15]">
                  4.8/5
                </span>
                <span className="inline-flex gap-[1px] items-center mt-[2px]" aria-label="4.8 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ── Blog grid ── */}
      <section
        style={{
          background: "#ffffff",
          padding: "0 clamp(16px, 4vw, 24px) clamp(40px, 6vw, 64px)",
          marginTop: 32,
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          {playbooks.length === 0 ? (
            <p className="text-center text-slate-500 py-24">
              Playbooks coming soon. Check back shortly.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(24px, 3vw, 40px)",
              }}
              className="playbook-grid"
            >
              {playbooks.map((playbook) => (
                <PlaybookCard key={playbook.slug} playbook={playbook} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .playbook-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .playbook-grid { grid-template-columns: 1fr !important; }
        }
        .face-avatar {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s;
          z-index: 1;
          cursor: default;
        }
        .face-avatar:hover {
          transform: scale(2.4);
          z-index: 20;
        }
      `}</style>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#16a34a" width={12} height={12}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}
