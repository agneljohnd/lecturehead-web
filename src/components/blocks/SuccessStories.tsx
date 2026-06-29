"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function SuccessStories() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const t = testimonials[active];

  return (
    <section id="stories" style={{ backgroundColor: "#f5f5f5" }} className="py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Two-column section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16">

          {/* Left col: eyebrow only */}
          <div className="flex lg:flex-col items-start pt-1">
            <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
              Testimonials
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </div>

          {/* Right col: heading + card */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              This is what our<br />clients think about us
            </h2>

            {/* Card */}
            <div className="bg-white rounded-md  p-8 lg:p-10">
              <div className="flex lg:hidden gap-5">

    {/* Left */}
    <div className="flex-1">
      <p className="text-sm font-medium text-slate-400 tabular-nums mb-5">
        {String(active + 1).padStart(2, "0")}
        <span className="text-slate-300"> / </span>
        {String(total).padStart(2, "0")}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-base text-slate-700 h-60 leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="mt-8 flex items-center gap-3">
            {t.photo ? (
              <Image
                src={t.photo}
                alt={t.author}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "#e9e4ff", color: "#6633d1" }}
              >
                {t.avatarInitials}
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-slate-900">
                {t.author}
              </p>
              <p className="text-xs text-slate-400">
                {t.role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex  items-center justify-center mt-6 gap-2">
        <button
        onClick={prev}
        className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center"
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 4L6 8l4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center"
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      
    </div>
    </div>

    {/* Right Arrows */}
    
  </div>
              <div className="hidden lg:grid  lg:grid-cols-[64px_1fr] gap-8 lg:gap-10">

                {/* Left: counter + arrows */}
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-medium text-slate-400 tabular-nums leading-none">
                    {String(active + 1).padStart(2, "0")}
                    <span className="text-slate-300"> / </span>
                    {String(total).padStart(2, "0")}
                  </p>

                  {/* next (→) first, then prev (←) */}
                   <div className="flex  gap-2 mt-auto">
                    
                    <button
                      onClick={prev}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-800 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-800 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right: quote + author — single AnimatePresence for clean transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col"
                  >
                    <p className="text-base lg:text-lg h-32 text-slate-700 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>

               
                     <div className="mt-12 flex items-center gap-3">
                      {t.photo ? (
                        <Image
                          src={t.photo}
                          alt={t.author}
                          width={40}
                          height={40}
                          className="rounded-full flex-shrink-0 object-cover"
                          style={{ width: 40, height: 40 }}
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                          style={{ background: "#e9e4ff", color: "#6633d1" }}
                        >
                          {t.avatarInitials}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-slate-900 leading-tight">{t.author}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                      </div>
                    </div>
                   
   
                    
                  </motion.div>
                  
                  
                </AnimatePresence>
                

              </div>
            </div>
 
          </div>
        </div>

      </div>
    </section>
  );
}
