"use client";

import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    heading: "USE CASES",
    links: [
      { label: "Coaches", href: "/" },
      { label: "Educators", href: "/" },
      { label: "Training Institutes", href: "/" },
      { label: "Corporate Training", href: "/" },
      { label: "Bootcamps", href: "/" },
      { label: "Creators & Influencers", href: "/" },
      { label: "Workshops", href: "/" },
      { label: "Webinars", href: "/" },
    ],
  },
  {
    heading: "FEATURES",
    links: [
      { label: "Course Builder", href: "/" },
      { label: "Live Sessions", href: "/" },
      { label: "Scheduling", href: "/" },
      { label: "Quizzes & Assignment", href: "/" },
      { label: "Discussions", href: "/" },
      { label: "Announcements", href: "/" },
      { label: "Student Management", href: "/" },
      { label: "Custom Branding", href: "/" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
      { label: "Trust & Safety", href: "/" },
    ],
  },
  {
    heading: "SOCIALS",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/lecturehead/", external: true },
      { label: "Instagram", href: "https://www.instagram.com/lectureheadofficial/", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-4 pt-5 pb-0">
      {/* ── Dark card ── */}
      <div className="bg-[#15191d] rounded-[20px] p-[clamp(32px,5vw,56px)_clamp(20px,5vw,56px)_clamp(32px,4vw,48px)] max-w-7xl mx-auto">
        {/* Top — CTA section */}
        <div className="text-center pb-12 border-b border-white/10">
          <h2 className="mx-auto mb-8  text-2xl md:text-[clamp(28px,4vw,40px)] font-light leading-[1.15] tracking-[-0.03em] text-white">
            Everything you need to run <br /> courses, cohorts, and community.
          </h2>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            {/* White pill — Book a Demo */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
              className="inline-flex items-center gap-2 bg-white text-[#15191d] rounded-full px-8 py-[14px] text-[0.8rem] font-semibold tracking-[0.08em] uppercase cursor-pointer border-none whitespace-nowrap"
            >
              BOOK A DEMO
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#15191d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dark pill — See How It Works */}
            <Link
              href="#features"
              className="inline-flex items-center gap-2.5 bg-white/10 text-white rounded-full px-8 py-[14px] text-[0.8rem] font-semibold tracking-[0.08em] uppercase no-underline whitespace-nowrap"
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                <path d="M1 1L9 6L1 11V1Z" />
              </svg>
              SEE HOW ITS WORK
            </Link>
          </div>
        </div>

        {/* Bottom — Logo + nav columns */}
        <div className="footer-grid pt-12 grid grid-cols-[200px_repeat(4,1fr)] gap-[clamp(24px,3vw,40px)] items-start">
          {/* Logo + wordmark */}
          <div>
            <Image
              src="/images/logos/lh logo.png"
              alt="LectureHead"
              width={56}
              height={56}
              className="rounded-[12px]"
            />
            <p className="mt-3 text-base font-medium text-white tracking-[-0.01em]">
              Lecture Head
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/45">
                {col.heading}
              </h3>
              <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-nav-link text-[0.85rem] font-normal text-white/65 no-underline transition-colors duration-200 hover:text-white"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Legal bar — below card, on lavender bg ── */}
      <div className="flex items-center justify-between px-1 py-4 flex-wrap gap-2">
        <p className="m-0 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-black/50">
          © Lecture Head @{new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          {[
            { label: "Privacy & Policy", href: "/privacy" },
            { label: "Terms and Conditions", href: "/terms" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-black/50 no-underline"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Tablet — logo on its own row, nav columns in a 2-up grid */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-grid > :first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}