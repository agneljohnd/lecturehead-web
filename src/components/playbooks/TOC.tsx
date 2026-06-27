"use client"; // Needs interactivity for active-state highlighting

import { useEffect, useState } from "react";
import type { TOCItem } from "@/lib/toc";

interface TOCProps {
  items: TOCItem[];
}

/**
 * Table of contents — extracted from MDX headings.
 * Rendered client-side so it can track scroll position.
 */
export function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">
        On this page
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              className={`block leading-snug transition-colors hover:text-brand-700 ${
                activeId === item.id
                  ? "text-brand-600 font-medium"
                  : "text-slate-500"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
