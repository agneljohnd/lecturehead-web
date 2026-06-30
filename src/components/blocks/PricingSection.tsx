"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


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
    name: "Starter",
    tag: null,
    base: 5999,
    desc: "Perfect for educators and creators starting their online teaching journey.",
    intro: "Everything you need to launch your academy…",
    features: [

      "Unlimited Users",
      "Unlimited Courses ",
      "1 Instructor",
      "Recorded Courses",
      "Live Classes",
      "Comment Discussion",
      "100 GB Storage",
      "Review Collection",
      "Fixed Certificate",
      "Coupons",
    ],
  },
  {
    name: "Pro",
    tag: "Popular",
    base: 13799,
    desc: "Built for growing academies that need advanced learning tools.",
    intro: "Everything in Starter plus…",
    features: [

      "Unlimited Users",
       "Unlimited Courses ",
      "Multiple Instructors (3 Licenses)",
      "Leaderboard",
      "Brand Color Customization",
      "Community",
      "Automated Surveys",
      "Certificate Customization",
      "Prebook Option",
      "Split Payment",
      "Drip Learning",
      "200 GB Storage",
      "Cohort Scheduling",
      "Duplicate Programs & Reuse",
      "White Label"
    ],
  },

];

const logos = [
  {
    src: "/images/logos/emc.png",
    alt: "Logo 1",
  },
  {
    src: "/images/logos/hrlogo.png",
    alt: "Logo 2",
  },
  {
    src: "/images/logos/ss.png",
    alt: "Logo 3",
  },
  {
    src: "/images/logos/gglogo.png",
    alt: "Logo 4",
  }, {
    src: "/images/logos/sp.png",
    alt: "Logo 5",
  },
  {
    src: "/images/logos/ccs.png",
    alt: "Logo 6",
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-white py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Top row: heading + rating */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          {/* Mixed-typography heading */}
          <h2 style={{ margin: 0, lineHeight: 1.08 }}>
            <span
              style={{
                display: "block",

                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
              }}
              className="text-[26px]  lg:text-[40px]"
            >
              We&rsquo;ve got a plan
            </span>

            <span
              className="block text-[26px]  lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0a0a0a]"
            >
              that&rsquo;s perfect for you
            </span>
          </h2>

        </div>

        {/* Billing toggle — tab style */}
        <div className="flex items-center gap-1 mb-8 border border-slate-200 rounded-lg p-1 w-fit">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${!annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-800"
              }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-800"
              }`}
          >
            Annual billing
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
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
                <span className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
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
                {/* <p className="text-xs text-slate-500 mb-3">{plan.intro}</p> */}
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
              <span className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Custom</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">pricing</p>

            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              For institutions & large teams
            </p>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
              className="w-full text-center rounded-full bg-black text-white text-sm font-medium uppercase py-2.5 hover:bg-neutral-800 transition-colors mb-6"
            >
              Contact sales
            </button>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Features</p>
              {/* <p className="text-xs text-slate-500 mb-3">Everything in Pro plus…</p> */}
              <ul className="space-y-2.5">
                {[
                  "Custom Pricing",
                  "Custom Features",
                  "Dedicated Support",


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


      </div>
      <div className="mt-14 md:pt-10 container mx-auto max-w-6xl p-4 border-t border-slate-100 px-4">
        <div className="flex flex-col  gap-6">
          <div className=" flex items-center mt-4 shrink-0 md:mb-4">
            <p className="text-sm md:text-2xl text-center lg:text-left   md:font-semibold whitespace-nowrap">
              Trusted By
            </p>
           
 

          </div>

          <div className="flex flex-wrap items-center lg:justify-between justify-center w-full gap-8 lg:gap-12">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className="h-10 md:h-16 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
