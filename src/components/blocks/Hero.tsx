"use client";

import Image from "next/image";
import { Button } from "@/components/common/Button";

function openDemo() {
  window.dispatchEvent(new CustomEvent("open:demo"));
}

interface HeroProps {
  eyebrow?: string;
  headingLines: string[];
  subtext?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function Hero({ eyebrow, headingLines, subtext, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative bg-white  overflow-hidden">
      {/* Purple glow top-left */}
      <div
        className="pointer-events-none  absolute -top-20 -left-20 w-[700px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(102,51,209,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative container mx-auto flex flex-col lg:flex-row lg:items-center lg:min-h-[720px]">
        {/* ── Left: text ── */}
        <div className="px-4 pt-28  lg:px-16 lg:pt-30 lg:pb-28 lg:w-[55%]">
          {eyebrow && (
            <>
              <style>{`
                @keyframes eyebrow-in {
                  from { opacity: 0; transform: translateY(7px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes line-draw {
                  from { transform: scaleX(0); }
                  to   { transform: scaleX(1); }
                }
              `}</style>
              <div className="inline-block mb-8">
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest text-slate-500"
                  style={{ animation: "eyebrow-in 0.5s ease-out both" }}
                >
                  {eyebrow}
                </p>
                <div
                  style={{
                    height: 1,
                    background: "#6633d1",
                    transformOrigin: "left center",
                    animation: "line-draw 0.7s ease-out 0.35s both",
                  }}
                />
              </div>
            </>
          )}

          <h1 className="text-3xl sm:text-[68px] lg:text-[86px] font-medium leading-[0.95] sm:leading-[0.92] tracking-[-0.04em] text-black">
            {headingLines.map((line, i) =>
              line.includes("\n") ? (
                line.split("\n").map((part, j) => (
                  <span key={`${i}-${j}`} className="block">
                    {part}
                  </span>
                ))
              ) : (
                <span key={i} className="block">
                  {line}
                </span>
              )
            )}
          </h1>

          {subtext && (
            <p className="md:mt-8 mt-5 text-base text-slate-500 max-w-[380px] leading-relaxed">
              {subtext}
            </p>
          )}

          <div className="md:mt-10 mt-6 flex flex-row  items-center justify-center md:justify-start gap-3 md:gap-6">
            {primaryCTA && (
              <Button id="hero-book-btn" onClick={openDemo} variant="dark" size="lg" arrow>
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <button
                onClick={openDemo}
                className="inline-flex border rounded-full px-2  py-3 items-center gap-2.5 text-sm font-medium text-slate-600 hover:text-black transition-colors"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
                    <path d="M0 0L8 5L0 10V0Z" />
                  </svg>
                </span>
                {secondaryCTA.label}
              </button>
            )}
          </div>

        </div>

        {/* ── Right: dashboard screenshot + social proof ── */}
        <div className="relative  lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[48%] flex flex-col items-center justify-center overflow-hidden pt-5 lg:pt-24 lg:pt-0">
          <Image
            src="/images/usable-images/LMS Portal open.png"
            alt="LectureHead LMS dashboard"
            width={900}
            height={700}
            className="w-full h-auto object-contain object-center lg:object-right"
            priority
          />

          {/* Social proof strip */}
          <div className="flex items-center gap-5 flex-wrap justify-center w-full px-8 mt-4 pb-8 lg:pb-4">
            {/* Face avatars */}
            <span className="inline-flex items-center">
              {[
                { src: "/images/faces/Epaphra.jpg",     alt: "Epaphra" },
                { src: "/images/faces/Arunachalam.jpg", alt: "Arunachalam" },
                { src: "/images/faces/HR Navin.jpg",    alt: "HR Navin" },
                { src: "/images/faces/Thoufiq.jpg",     alt: "Thoufiq" },
                { src: "/images/faces/Shashank.jpg",    alt: "Shashank" },
              ].map((face, i) => (
                <span
                  key={face.alt}
                  className="hero-face"
                  style={{ marginLeft: i === 0 ? 0 : -10, display: "inline-block", position: "relative" }}
                >
                  <Image
                    src={face.src}
                    alt={face.alt}
                    width={42}
                    height={42}
                    style={{
                      borderRadius: "50%",
                      border: "2.5px solid #fff",
                      objectFit: "cover",
                      width: 42,
                      height: 42,
                      display: "block",
                    }}
                  />
                </span>
              ))}
            </span>

            {/* Count */}
            <span className="flex flex-col">
              <span className="text-base font-bold text-slate-900 leading-tight">5,467</span>
              <span className="text-[1rem] text-slate-400 leading-tight">trusted by top creators</span>
            </span>

            {/* Divider */}
            <span className="w-px h-8 bg-slate-200 hidden sm:block" />

            {/* Rating */}
            <span className="flex flex-col md:item start items-center justify-center">
              <span className="text-base font-bold text-slate-900 leading-tight">4.8/5</span>
              <span className="inline-flex gap-px mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#16a34a" width={14} height={14}>
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-face {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
        }
        .hero-face:hover {
          transform: scale(1.1);
          z-index: 20;
        }
      `}</style>
    </section>
  );
}
