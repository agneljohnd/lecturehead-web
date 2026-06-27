import { Section } from "@/components/layout/PageShell";

const rows = [
  { feature: "Preview Before Buying",  others: null,                lectureHead: "82% upgrade",         why: "Removes the 'what if it's bad' fear" },
  { feature: "Split Payments",         others: "Via 3rd-party apps", lectureHead: "Built-in (2.3×)",    why: "Makes expensive courses affordable" },
  { feature: "AI Student Support",     others: null,                lectureHead: "24/7 automated",      why: "Save 10+ hours per week" },
  { feature: "AI Surveys",             others: null,                lectureHead: "Automated",            why: "Understand your students better" },
  { feature: "Smart Urgency",          others: null,                lectureHead: "Built-in",             why: "Turn 'later' into 'now'" },
  { feature: "Community",             others: "Basic",             lectureHead: "Advanced",             why: "Built-in discussions & peer learning" },
  { feature: "Pricing Model",          others: "5–10% commission",  lectureHead: "Flat subscription",   why: "Predictable costs, no surprises" },
  { feature: "Conversion Focus",       others: "No",               lectureHead: "Yes",                  why: "Higher enrollment by design" },
];

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 flex-shrink-0">
      <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 flex-shrink-0">
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M1 1L9 9M9 1L1 9" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 mb-4">
          Why educators are switching
        </p>
        <h2 className="text-3xl lg:text-4xl font-medium tracking-[-0.03em] text-slate-900">
          Built to get enrollments, not just host videos.
        </h2>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-slate-400 w-[30%]">Feature</th>
              <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-slate-400 w-[22%]">Others</th>
              <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-brand-300 w-[22%]">LectureHead</th>
              <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-slate-400 w-[26%]">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {row.others ? (
                      <>
                        <CheckIcon />
                        <span className="text-slate-500">{row.others}</span>
                      </>
                    ) : (
                      <CrossIcon />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="font-medium text-slate-900">{row.lectureHead}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {rows.map((row) => (
          <div key={row.feature} className="rounded-xl border border-slate-100 bg-white p-4">
            <p className="font-semibold text-slate-900 mb-3">{row.feature}</p>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Others</p>
                <div className="flex items-center gap-1.5">
                  {row.others ? (
                    <span className="text-sm text-slate-500">{row.others}</span>
                  ) : (
                    <CrossIcon />
                  )}
                </div>
              </div>
              <div className="rounded-lg bg-brand-50 p-3 border border-brand-100">
                <p className="text-[10px] uppercase tracking-widest text-brand-600 mb-2">LectureHead</p>
                <div className="flex items-center gap-1.5">
                  <CheckIcon />
                  <span className="text-sm font-medium text-slate-900">{row.lectureHead}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">{row.why}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Most platforms help you host courses.{" "}
        <span className="font-semibold text-slate-700">LectureHead helps you build an education business.</span>
      </p>
    </Section>
  );
}
