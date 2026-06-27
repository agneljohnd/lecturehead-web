import type { Metadata } from "next";
import { buildSEO } from "@/lib/seo";
import { organizationSchema, softwareApplicationSchema, faqSchema } from "@/lib/schema";
import { Schema } from "@/components/seo/Schema";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { ProblemSolution } from "@/components/blocks/ProblemSolution";
import { BuiltFor } from "@/components/blocks/BuiltFor";
import { LearningExperience } from "@/components/blocks/LearningExperience";
import { SuccessStories } from "@/components/blocks/SuccessStories";
import { PricingSection } from "@/components/blocks/PricingSection";
import { FAQBlock } from "@/components/blocks/FAQ";
import { InternalLinks } from "@/components/blocks/InternalLinks";
import { homeContent } from "@/content/site/home";
import { homepageFAQs } from "@/data/faqs";

export const metadata: Metadata = buildSEO({
  path: "/",
});

export default function HomePage() {
  const { hero, internalLinks } = homeContent;

  return (
    <PageShell>
      <Schema data={organizationSchema()} />
      <Schema data={softwareApplicationSchema()} />
      <Schema data={faqSchema(homepageFAQs)} />

      <Hero
        eyebrow={hero.eyebrow}
        headingLines={hero.headingLines}
        subtext={hero.subtext}
        primaryCTA={hero.primaryCTA}
        secondaryCTA={hero.secondaryCTA}
      />

      <ProblemSolution />

      <BuiltFor />

      <LearningExperience />

      <SuccessStories />

      <PricingSection />

      <FAQBlock items={homepageFAQs} />

      <InternalLinks
        heading={internalLinks.heading}
        subheading={internalLinks.subheading}
        links={internalLinks.links}
      />
    </PageShell>
  );
}
