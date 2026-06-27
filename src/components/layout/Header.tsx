"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { primaryNav, ctaNav } from "@/content/site/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the header hides on scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  return (
    <div
      className="fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-80px)] max-w-4xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        transform: scrolled
          ? "translate(-50%, -120%)"
          : "translate(-50%, 0)",
      }}
    >
      {/* Floating white card */}
      <header
        className="rounded-[28px] md:rounded-full px-1 py-1"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.98) 60%, rgba(255,255,255,0.75) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        {/* Use relative + absolute so nav is always perfectly centered */}
        <div className="relative flex h-[52px] items-center px-3 sm:px-4">
          {/* Logo — left */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded flex-none"
            aria-label="LectureHead home"
          >
            <span
              className="text-sm font-medium text-slate-900"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              LectureHead
            </span>
          </Link>

          {/* Nav — absolutely centered relative to the pill (desktop only) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster — CTA + mobile menu toggle */}
          <div className="ml-auto flex-none flex items-center gap-1.5 sm:gap-2">
            <Button
              onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
              variant="dark"
              size="sm"
              arrow
              className="!px-4 sm:!px-6"
            >
              {ctaNav.label}
            </Button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-black/5 transition-colors"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden px-2 pb-2 pt-1"
          >
            <ul className="flex flex-col">
              {primaryNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-black/5 transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
