"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type FeatureId = "cohorts" | "community" | "live-coaching" | "assessments";

interface Feature {
  id: FeatureId;
  title: string;
  description: string;
}

const featureImages: Record<FeatureId, string> = {
  cohorts: "/images/usable-images/Cohort photo.png",
  community: "/images/usable-images/Community tab.png",
  "live-coaching": "/images/usable-images/live coaching.png",
  assessments: "/images/usable-images/Assessment.png",
};

const features: Feature[] = [
  {
    id: "cohorts",
    title: "Cohorts",
    description:
      "Schedule when your courses go live. Run structured learning programs with fixed start dates, keeping students accountable and progressing together.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Live chat with mentors. Give your students a real home — not a WhatsApp group. Discussions, announcements, peer connections, and direct access to you.",
  },
  {
    id: "live-coaching",
    title: "Live Coaching",
    description:
      "Live Classes. Host real-time sessions directly inside your platform — no Zoom links, no third-party tools. Just you and your students, live.",
  },
  {
    id: "assessments",
    title: "Assessments",
    description:
      "Conduct Quizzes and Score Assessments. Track student progress with built-in quizzes, assignments, and automatic scoring.",
  },
];

function FeatureIcon({ id }: { id: FeatureId }) {
  if (id === "cohorts")
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" fill="currentColor" fillOpacity="0.65" />
        <rect x="10.5" y="1" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
        <rect x="1" y="10.5" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
        <rect x="10.5" y="10.5" width="6.5" height="6.5" rx="1.5" fill="currentColor" fillOpacity="0.65" />
      </svg>
    );
  if (id === "community")
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="5.5" cy="5.5" r="3.5" fill="currentColor" />
        <circle cx="12.5" cy="5.5" r="3.5" fill="currentColor" fillOpacity="0.55" />
        <circle cx="5.5" cy="12.5" r="3.5" fill="currentColor" fillOpacity="0.55" />
        <circle cx="12.5" cy="12.5" r="3.5" fill="currentColor" />
      </svg>
    );
  if (id === "live-coaching")
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6.5L13 9L7 11.5V6.5Z" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 9L7.5 11L12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProblemSolution() {
  const [active, setActive] = useState<FeatureId>("cohorts");
  const activeFeature = features.find((f) => f.id === active)!;

  return (
    <section id="features" className="bg-[#09090b] py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Top row: heading + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          <h2 className="text-2xl lg:text-[40px] font-medium text-white tracking-[-0.03em] leading-[1.15] max-w-2xl">
            From launching your first course to scaling it to millions of students
          </h2>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
            className="flex-shrink-0 self-start inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
          >
            Book a Demo
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-3">

          {/* Left: accordion */}
          <div className="flex flex-col gap-2.5">
            {features.map((f) => {
              const isActive = f.id === active;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  layout
                  transition={{ layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
                  className="w-full text-left rounded-[16px] bg-white border border-white/10 overflow-hidden"
                  style={{ boxShadow: isActive ? "0 4px 24px rgba(0,0,0,0.18)" : "0 1px 4px rgba(0,0,0,0.10)" }}
                >
                  {/* Header row — always visible */}
                  <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ paddingBottom: isActive ? "12px" : undefined }}
                  >
                    <div className="flex items-center gap-2.5">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            key="icon"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.2 }}
                            className="text-brand-600"
                          >
                            <FeatureIcon id={f.id} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <span className={`text-sm md:text-base font-semibold transition-colors duration-200 ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                        {f.title}
                      </span>
                    </div>

                    {/* + / − indicator */}
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="text-brand-600 text-xl leading-none font-light flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </div>

                  {/* Expandable description */}
            <AnimatePresence initial={false}>
  {isActive && (
    <motion.div
      key="content"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: "hidden" }}
    >
      <p className="px-5 text-sm md:text-base lg:h-36 text-slate-500 leading-relaxed">
        {f.description}
      </p>

      {/* Mobile Image */}
      <div className="lg:hidden mt-4 px-5 pb-5">
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-slate-100">
          <Image
            src={featureImages[f.id]}
            alt={f.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* Right: preview panel — explicit height on mobile, grid-stretch on desktop */}
      <div className="rounded-[16px] bg-white overflow-hidden relative hidden md:block">
  <AnimatePresence mode="wait">
    <motion.div
      key={active}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <Image
        src={featureImages[active]}
        alt={activeFeature.title}
        fill
        className="object-contain"
      />
    </motion.div>
  </AnimatePresence>
</div>
        </div>
      </div>
    </section>
  );
}
