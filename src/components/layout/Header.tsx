"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { primaryNav, ctaNav } from "@/content/site/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background effect after scrolling
      setScrolled(currentScrollY > 20);

      // Always show when near the top
      if (currentScrollY < 20) {
        setShowHeader(true);
      }
      // Hide while scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }
      // Show while scrolling up
      else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when header hides
  useEffect(() => {
    if (!showHeader) {
      setMenuOpen(false);
    }
  }, [showHeader]);

  return (
    <div
      className={`fixed left-1/2 z-50
      w-[calc(100%-32px)] md:w-[calc(100%-80px)] max-w-4xl
      -translate-x-1/2 transition-all duration-300 ease-in-out
      ${
        showHeader
          ? "top-4 opacity-100 translate-y-0"
          : "-top-24 opacity-0 -translate-y-4"
      }`}
    >
      {/* Floating Card */}
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
        <div className="relative flex h-[52px] items-center px-3 sm:px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
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

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-900"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="ml-auto flex flex-none items-center gap-1.5 sm:gap-2">
            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open:demo"))
              }
              variant="dark"
              size="sm"
              arrow
              className="!px-4 sm:!px-6"
            >
              {ctaNav.label}
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-black/5 md:hidden"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2L14 14M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M1 1H17M1 7H17M1 13H17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="px-2 pb-2 pt-1 md:hidden"
          >
            <ul className="flex flex-col">
              {primaryNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-black/5"
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