import { Section } from "@/components/layout/PageShell";

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: Feature[];
  id?: string;
}

const icons: Record<string, React.ReactNode> = {
  preview: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  split: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  community: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  live: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  quiz: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
};

export function FeatureGrid({ eyebrow, heading, subheading, items, id }: FeatureGridProps) {
  return (
    <Section id={id} className="bg-white">
      {eyebrow && (
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-center text-3xl lg:text-4xl font-medium tracking-[-0.03em] text-slate-900">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-center text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>
      )}

      <dl className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((feature) => (
          <div
            key={feature.title}
            className="group relative rounded-2xl border border-slate-100 bg-white p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-colors duration-300">
              {feature.icon && icons[feature.icon] ? icons[feature.icon] : (
                <span className="text-base font-bold">{feature.icon?.charAt(0) ?? "●"}</span>
              )}
            </div>
            <dt className="relative text-base font-semibold text-slate-900">{feature.title}</dt>
            <dd className="relative mt-2 text-sm text-slate-500 leading-relaxed">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
