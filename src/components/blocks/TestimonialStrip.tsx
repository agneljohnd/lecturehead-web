import { Section } from "@/components/layout/PageShell";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialStripProps {
  testimonials: Testimonial[];
  heading?: string;
}

export function TestimonialStrip({ testimonials, heading }: TestimonialStripProps) {
  const main = testimonials[0];
  const rest = testimonials.slice(1);

  if (!main) return null;

  return (
    <Section className="bg-brand-50 border-y border-brand-100">
      {heading && (
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 mb-12">
          {heading}
        </p>
      )}

      {/* Single featured quote */}
      <figure className="max-w-3xl mx-auto text-center">
        {/* Open quote mark */}
        <div className="text-brand-200 text-[80px] leading-none font-serif mb-2 select-none">&ldquo;</div>

        <blockquote>
          <p className="text-lg lg:text-2xl font-medium text-slate-800 leading-relaxed tracking-[-0.01em]">
            {main.quote}
          </p>
        </blockquote>

        <figcaption className="mt-8 flex items-center justify-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
            {main.avatarInitials}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">{main.author}</p>
            <p className="text-xs text-slate-500 mt-0.5">
              {main.role}
              {main.school ? ` · ${main.school}` : ""}
            </p>
          </div>
        </figcaption>
      </figure>

      {/* Additional testimonials as smaller cards */}
      {rest.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((t) => (
            <figure key={t.author} className="rounded-xl bg-white p-5 shadow-sm border border-brand-100">
              <blockquote>
                <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  {t.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">{t.author}</p>
                  <p className="text-[11px] text-slate-400">{t.role}{t.school ? `, ${t.school}` : ""}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}
