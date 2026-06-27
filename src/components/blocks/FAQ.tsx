"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

interface FAQProps {
  items: FAQ[];
  id?: string;
}

export function FAQBlock({ items, id }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="py-20 lg:py-28" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left: heading + subtext + CTA */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl lg:text-5xl font-bold text-black tracking-[-0.03em] leading-[1.1] mb-auto">
              General Questions asked by customers.
            </h2>
            <div className="mt-auto pt-16">
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Our friendly team is always here to help you with quick, clear, and reliable answers whenever needed.
              </p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {items.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-slate-900 pr-6 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 text-lg leading-none transition-colors"
                      style={{ minWidth: 32 }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
