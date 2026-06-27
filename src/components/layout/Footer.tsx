"use client";

import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    heading: "USE CASES",
    links: [
      { label: "Coaches", href: "/" },
      { label: "Educators", href: "/" },
      { label: "Training Institutes", href: "/" },
      { label: "Corporate Training", href: "/" },
      { label: "Bootcamps", href: "/" },
      { label: "Creators & Influencers", href: "/" },
      { label: "Workshops", href: "/" },
      { label: "Webinars", href: "/" },
    ],
  },
  {
    heading: "FEATURES",
    links: [
      { label: "Course Builder", href: "/" },
      { label: "Live Sessions", href: "/" },
      { label: "Scheduling", href: "/" },
      { label: "Quizzes & Assignment", href: "/" },
      { label: "Discussions", href: "/" },
      { label: "Announcements", href: "/" },
      { label: "Student Management", href: "/" },
      { label: "Custom Branding", href: "/" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Trust & Safety", href: "/" },
    ],
  },
  {
    heading: "SOCIALS",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/lecturehead/", external: true },
      { label: "Instagram", href: "https://www.instagram.com/lectureheadofficial/", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        padding: "20px 20px 0",
      }}
    >
      {/* ── Dark card ── */}
      <div
        style={{
          background: "#15191d",
          borderRadius: 20,
          padding: "clamp(32px, 5vw, 56px) clamp(20px, 5vw, 56px) clamp(32px, 4vw, 48px)",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Top — CTA section */}
        <div
          style={{
            textAlign: "center",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: "0 auto 32px",
              maxWidth: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Everything you need to run courses, cohorts, and community.
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {/* White pill — Book a Demo */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                color: "#15191d",
                borderRadius: 100,
                padding: "14px 32px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                border: "none",
                whiteSpace: "nowrap",
              }}
            >
              BOOK A DEMO
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#15191d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dark pill — See How It Works */}
            <Link
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.10)",
                color: "#ffffff",
                borderRadius: 100,
                padding: "14px 32px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                <path d="M1 1L9 6L1 11V1Z" />
              </svg>
              SEE HOW ITS WORK
            </Link>
          </div>
        </div>

        {/* Bottom — Logo + nav columns */}
        <div
          className="footer-grid"
          style={{
            paddingTop: 48,
            display: "grid",
            gridTemplateColumns: "200px repeat(4, 1fr)",
            gap: "clamp(24px, 3vw, 40px)",
            alignItems: "start",
          }}
        >
          {/* Logo + wordmark */}
          <div>
            <Image
              src="/images/logos/lh logo.png"
              alt="LectureHead"
              width={56}
              height={56}
              className="rounded-[12px]"
            />
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Lecture Head
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3
                style={{
                  margin: "0 0 16px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {col.heading}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .footer-nav-link {
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-nav-link:hover { color: #ffffff; }

        /* Tablet — logo on its own row, nav columns in a 2-up grid */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-grid > :first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>

      {/* ── Legal bar — below card, on lavender bg ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 4px 20px",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.5)",
          }}
        >
          © Lecture Head @{new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Privacy & Policy", href: "/privacy" },
            { label: "Terms and Conditions", href: "/terms" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.5)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
