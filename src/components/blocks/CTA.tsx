import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";

interface CTAProps {
  heading: string;
  subheading?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const pills = ["High Conversions", "Better Learning Experience", "Hassle-free Management"];

export function CTA({ heading, subheading, primaryCTA, secondaryCTA }: CTAProps) {
  return (
    <section className="bg-white py-6 px-5 lg:px-8">
      <Container>
        <div
          className="rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center"
          style={{
            background: "linear-gradient(135deg, #6633d1 0%, #3703a5 100%)",
          }}
        >
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {pills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          <h2 className="text-3xl lg:text-[40px] font-medium tracking-[-0.03em] text-white max-w-2xl mx-auto leading-tight">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-5 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-widest text-brand-800 hover:bg-brand-50 transition-colors"
                >
                  {primaryCTA.label}
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/20 transition-colors"
                >
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          )}

          <p className="mt-6 text-xs text-white/50">
            See how LectureHead fits your business in under 15 minutes.
          </p>
        </div>
      </Container>
    </section>
  );
}
