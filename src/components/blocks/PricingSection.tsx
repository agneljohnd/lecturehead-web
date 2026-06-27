"use client";

import { useState } from "react";

const DISCOUNT = 0.3;

function monthlyPrice(price: number, annual: boolean) {
  return annual ? Math.round(price * (1 - DISCOUNT)) : price;
}

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function GreenCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="#22c55e" />
      <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const plans = [
  {
    name: "Growth",
    tag: null,
    base: 5999,
    desc: "Best for educators just getting started.",
    intro: "Everything you need to launch plus…",
    features: [
      "Up to 500 students",
      "50 GB storage",
      "Recorded course hosting",
      "Quizzes & assessments",
      "Certificates",
      "0% commission",
    ],
  },
  {
    name: "Pro",
    tag: "Popular",
    base: 13799,
    desc: "For serious educators building a full business.",
    intro: "Everything in Growth plus…",
    features: [
      "Unlimited students",
      "200 GB storage",
      "Live coaching & cohorts",
      "Built-in community",
      "AI student assistant",
      "White-label platform",
      "Priority support",
      "0% commission",
    ],
  },
];

const logos = ["upwork", "Notion", "Razorpay", "Zoom", "Slack", "Stripe", "Loom", "Intercom"];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top row: heading + rating */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          {/* Mixed-typography heading */}
          <h2 style={{ margin: 0, lineHeight: 1.08 }}>
            <span style={{
              display: "block",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              fontFamily: "inherit",
            }}>
              We&rsquo;ve got a plan
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              fontFamily: "inherit",
            }}>
              that&rsquo;s perfect for you
            </span>
          </h2>

        </div>

        {/* Billing toggle — tab style */}
        <div className="flex items-center gap-1 mb-8 border border-slate-200 rounded-lg p-1 w-fit">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              !annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
              annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Annual billing
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
              annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
            }`}>
              Save 30%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-slate-200 rounded-2xl p-6 flex flex-col"
            >

              {/* Name + tag */}
              <div className="flex items-start justify-between mb-4">
                <p className="text-base font-bold text-slate-900">{plan.name} plan</p>
                {plan.tag && (
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {fmt(monthlyPrice(plan.base, annual))}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">per month</p>

              {/* Desc */}
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{plan.desc}</p>

              {/* CTA */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
                className="w-full text-center rounded-full bg-black text-white text-sm font-medium uppercase py-2.5 hover:bg-neutral-800 transition-colors mb-6"
              >
                Get started
              </button>

              {/* Features */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Features</p>
                <p className="text-xs text-slate-500 mb-3">{plan.intro}</p>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <GreenCheck />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Enterprise */}
          <div className="border border-slate-200 rounded-2xl p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <p className="text-base font-bold text-slate-900">Enterprise plan</p>
            </div>

            <div className="flex items-end gap-1.5 mb-1">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Custom</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">pricing</p>

            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              For institutions, large teams, and custom deployments.
            </p>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
              className="w-full text-center rounded-full bg-black text-white text-sm font-medium uppercase py-2.5 hover:bg-neutral-800 transition-colors mb-6"
            >
              Contact sales
            </button>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Features</p>
              <p className="text-xs text-slate-500 mb-3">Everything in Pro plus…</p>
              <ul className="space-y-2.5">
                {[
                  "Custom student limits",
                  "Dedicated infrastructure",
                  "SLA & uptime guarantee",
                  "Custom integrations",
                  "Onboarding & training",
                  "Dedicated account manager",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <GreenCheck />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Logo trust strip */}
        <div className="mt-14 pt-10 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-slate-400 font-semibold text-sm lg:text-base tracking-tight select-none"
                style={{ fontFamily: "inherit" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
