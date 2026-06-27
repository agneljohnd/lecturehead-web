"use client";

import { useEffect, useState } from "react";

const ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const DURATION = 4; // seconds per loop

export function HeroCursorAnimation() {
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);
  const [dx, setDx] = useState(600);

  useEffect(() => {
    const update = () => {
      const btn = document.getElementById("hero-play-btn");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      setTarget({ x, y });
      setDx(window.innerWidth - x + 120);
    };

    const t = setTimeout(update, 200);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  if (!target) return null;

  const lineKeyframes = ANGLES.map(
    (a) => `
    @keyframes lh-line-${a} {
      0%,  44%  { transform: rotate(${a}deg) scaleX(0); opacity: 0; }
      48%       { transform: rotate(${a}deg) scaleX(0.4); opacity: 1; }
      58%       { transform: rotate(${a}deg) scaleX(1);   opacity: 0.8; }
      72%, 100% { transform: rotate(${a}deg) scaleX(1);   opacity: 0; }
    }
  `
  ).join("\n");

  return (
    <>
      <style>{`
        @keyframes lh-cursor {
          0%        { transform: translate(${dx}px, -24px);  opacity: 0; }
          6%        { opacity: 1; }
          44%       { transform: translate(2px, 1px);        opacity: 1; }
          46%       { transform: translate(0, 0) scale(0.86); opacity: 1; }
          50%, 74%  { transform: translate(0, 0) scale(1);   opacity: 1; }
          88%       { transform: translate(${dx * 0.45}px, -12px); opacity: 0; }
          100%      { transform: translate(${dx}px, -24px);  opacity: 0; }
        }
        ${lineKeyframes}
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none z-50"
        aria-hidden="true"
      >
        {/* ── Cursor ── */}
        <div
          style={{
            position: "absolute",
            left: target.x,
            top: target.y,
            animation: `lh-cursor ${DURATION}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            willChange: "transform, opacity",
          }}
        >
          {/* Standard pointer cursor in black */}
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L1.5 20.5L7.2 15.2L10.9 24L13.6 22.8L9.8 14H18L1.5 1.5Z"
              fill="#111111"
              stroke="white"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ── Sparkle burst (8 lines radiating from click point) ── */}
        <div
          style={{
            position: "absolute",
            left: target.x + 10,
            top: target.y + 10,
          }}
        >
          {ANGLES.map((angle) => (
            <div
              key={angle}
              style={{
                position: "absolute",
                width: 13,
                height: 1.5,
                background: "#111111",
                borderRadius: 3,
                top: 0,
                left: 0,
                transformOrigin: "0% 50%",
                transform: `rotate(${angle}deg) scaleX(0)`,
                animation: `lh-line-${angle} ${DURATION}s ease-out infinite`,
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
