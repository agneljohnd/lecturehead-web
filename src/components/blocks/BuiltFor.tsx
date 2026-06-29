"use client";

const rows = [
  {
    title: "Learning-First Experience",
    description:
      "Clean, intuitive, and distraction-free UI designed to keep students focused on learning—not figuring out the platform.",
    bg: "rgba(102,51,209,0.06)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7l9 5 9-5-9-5Z" stroke="#6633d1" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 15l9 5 9-5" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 11l9 5 9-5" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Keep 100% of Your Revenue",
    description:
      "Pay a simple subscription fee and retain every rupee you earn with 0% commission on course sales and transactions.",
    bg: "rgba(102,51,209,0.11)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#6633d1" strokeWidth="1.5" />
        <path d="M11 6v1.5M11 14.5V16M8.5 13.5c0 .83.67 1.5 1.5 1.5h2a1.5 1.5 0 0 0 0-3h-2a1.5 1.5 0 0 1 0-3h2c.83 0 1.5.67 1.5 1.5" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Powerful Cohort Management",
    description:
      "Schedule classes, manage batches, track student progress, coordinate mentors, and communicate with learners—all from one place.",
    bg: "rgba(102,51,209,0.17)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="15" rx="2" stroke="#6633d1" strokeWidth="1.5" />
        <path d="M2 9h18" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 2v4M15 2v4" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="14" r="1" fill="#6633d1" />
        <circle cx="11" cy="14" r="1" fill="#6633d1" />
        <circle cx="14" cy="14" r="1" fill="#6633d1" />
      </svg>
    ),
  },
  {
    title: "Dedicated Growth & Support Team",
    description:
      "Get hands-on support for onboarding, setup, platform optimization, and strategies to maximize your course sales and revenue.",
    bg: "rgba(102,51,209,0.24)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2a5 5 0 0 0-5 5v1H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a5 5 0 0 0 10 0h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Z" stroke="#6633d1" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 13.5c.5.5 1.5.5 2 0" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function BuiltFor() {
  return (
    <section className="bg-white py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 md:mb-16">
          <h2 className="text-2xl lg:text-[40px] font-medium text-black tracking-[-0.03em] leading-[1.15] max-w-xl">
            Reason why educators switch to LectureHead
          </h2>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
            className="flex-shrink-0 self-start inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest text-black hover:bg-black/5 transition-colors"
          >
            Book a Demo
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Stats strip */}
    <div className="flex justify-center lg:justify-start w-full mb-10">
  <div className="flex flex-col items-start gap-4 sm:flex-row lg:mb-10 sm:flex-wrap sm:justify-start sm:gap-10">
    {[
      { number: "₹0", label: "Setup Fee" },
      { number: "0%", label: "Commission" },
      { number: "0", label: "Effort Required" },
    ].map((stat, i) => (
      <div key={i} className="flex items-baseline gap-2">
        <span className=" text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {stat.number}
        </span>
        <span className="md:text-sm text-xs font-medium text-slate-400 uppercase tracking-widest">
          {stat.label}
        </span>
      </div>
    ))}
  </div>
</div>

        {/* Feature rows card */}
        <div className="rounded-2xl overflow-hidden border border-brand-100">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-4 sm:px-8 py-6 ${i < rows.length - 1 ? "border-b border-white/40" : ""}`}
              style={{ backgroundColor: row.bg }}
            >
              {/* Icon + title row */}
              <div className="flex items-center flex-col md:flex-row gap-4 sm:gap-6 sm:contents">
                {/* Icon box */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  {row.icon}
                </div>

                {/* Title */}
                <div className="w-full sm:w-[220px] lg:w-[260px] sm:flex-shrink-0">
                  <p className=" text-sm md:text-[15px] text-center font-semibold text-slate-900 leading-snug">
                    {row.title}
                  </p>
                </div>
              </div>

              {/* Description — now visible on mobile too */}
              <p className="flex-1 text-sm md:text-[15px] text-center text-slate-500 leading-relaxed md:pl-16 sm:pl-0">
                {row.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
