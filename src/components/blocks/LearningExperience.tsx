"use client";


function LeaderboardIllustration() {
  const entries = [
    { rank: "1", name: "Aisha K.", score: "9,840 pts" },
    { rank: "2", name: "Rahul M.", score: "8,210 pts" },
    { rank: "3", name: "Priya S.", score: "7,650 pts" },
    { rank: "4", name: "Dev P.", score: "6,990 pts" },
  ];
  return (
    <div
      className="mt-6 rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 16px rgba(0,0,0,0.15)",
      }}
    >
      {entries.map((e, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10 last:border-0">
          <span className="text-xs font-bold w-4 text-white/70">{e.rank}</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px] text-white font-semibold">
            {e.name[0]}
          </div>
          <span className="flex-1 text-xs text-white/80">{e.name}</span>
          <span className="text-xs font-semibold text-white/60">{e.score}</span>
        </div>
      ))}
    </div>
  );
}

function StreakIllustration() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const done = [true, true, true, true, true, false, false];
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl">🔥</span>
        <div>
          <p className="text-2xl font-bold text-slate-900 leading-none">21</p>
          <p className="text-xs text-slate-400 mt-0.5">day streak</p>
        </div>
      </div>
      <div className="flex gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full h-8 rounded-md flex items-center justify-center"
              style={{ background: done[i] ? "#6633d1" : "#e2e8f0" }}
            >
              {done[i] && <span className="text-white text-xs">✓</span>}
            </div>
            <span className="text-[9px] text-slate-400">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIIllustration() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">AI</div>
        <div className="rounded-2xl rounded-tl-none px-3 py-2 text-xs text-white/90 max-w-[85%]" style={{ background: "rgba(255,255,255,0.15)" }}>
          Hey! I noticed you struggled with Chapter 3. Want me to break it down?
        </div>
      </div>
      <div className="flex items-start gap-2 flex-row-reverse">
        <div className="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">U</div>
        <div className="rounded-2xl rounded-tr-none px-3 py-2 text-xs text-white/90 max-w-[85%]" style={{ background: "rgba(255,255,255,0.08)" }}>
          Yes please, explain concept 2 again.
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">AI</div>
        <div className="rounded-2xl rounded-tl-none px-3 py-2 text-xs text-white/90 max-w-[85%]" style={{ background: "rgba(255,255,255,0.15)" }}>
          Sure! Think of it like this...
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    bg: "#6633d1",
    titleColor: "text-white",
    descColor: "text-purple-200",
    title: "Leaderboards",
    description: "Rank students by progress and scores. Healthy competition keeps learners coming back.",
    illustration: <LeaderboardIllustration />,
  },
  {
    bg: "#ede9fe",
    titleColor: "text-slate-900",
    descColor: "text-slate-500",
    title: "Streaks",
    description: "Daily learning streaks build habits that last. Students complete courses at 2x the rate.",
    illustration: <StreakIllustration />,
  },
  {
    bg: "#0f0f10",
    titleColor: "text-white",
    descColor: "text-slate-400",
    title: "AI Assistant",
    description: "24/7 AI support answers student questions instantly — save 10+ hours a week.",
    illustration: <AIIllustration />,
  },
];

export function LearningExperience() {
  return (
    <section className="bg-white py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <h2 className="text-2xl lg:text-[40px] font-medium text-black tracking-[-0.03em] leading-[1.15] max-w-lg">
            A learning experience students actually enjoy.
          </h2>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open:demo"))}
            className="flex-shrink-0 self-start inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-black hover:bg-black/5 transition-colors"
          >
            Book a Demo
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-[10px] p-6 flex flex-col"
              style={{ backgroundColor: card.bg }}
            >
              <h3 className={`text-lg font-semibold leading-snug mb-2 ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed line-clamp-2 ${card.descColor}`}>
                {card.description}
              </p>
              {card.illustration}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
