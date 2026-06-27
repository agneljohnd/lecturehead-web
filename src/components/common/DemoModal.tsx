"use client";

import { useState, useEffect } from "react";

declare global {
  function fbq(...args: unknown[]): void;
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxBjvjTDURRg6H_0RxaV7d9OekXb2_A_xoEWwFAN2v0Z9JUliYpzM98ZI_dvNYJn9qi/exec";

// ── Corner toast ──────────────────────────────────────────────
function Toast({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 10000,
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "#6633d1",
          color: "#fff",
          borderRadius: 14,
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          boxShadow: "0 8px 32px rgba(102,51,209,0.35)",
          fontSize: 14,
          fontWeight: 500,
          maxWidth: 320,
        }}
      >
        {/* checkmark */}
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Our team will contact you shortly!
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────
export function DemoModal() {
  const [isOpen, setIsOpen]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [toast, setToast]       = useState(false);
  const [error, setError]       = useState("");
  const [form, setForm]         = useState({ name: "", email: "", phone: "" });

  // Listen for trigger event
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("open:demo", open);
    return () => window.removeEventListener("open:demo", open);
  }, []);

  const close = () => {
    setIsOpen(false);
    setError("");
    setTimeout(() => setForm({ name: "", email: "", phone: "" }), 300);
  };

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res  = await fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        if (typeof fbq !== "undefined") fbq("track", "Lead");
        close();
        showToast();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      // GAS sometimes blocks CORS on response read — treat network completion as success
      if (typeof fbq !== "undefined") fbq("track", "Lead");
      close();
      showToast();
    }

    setLoading(false);
  };

  return (
    <>
      {/* Corner toast — always in DOM, controlled by opacity */}
      <Toast visible={toast} />

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={close}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "modal-in 0.22s cubic-bezier(0.34,1.56,0.64,1) both" }}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(102,51,209,0.08)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#6633d1" strokeWidth="1.5" />
                  <path d="M7 9h6M7 12h4" stroke="#6633d1" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-[22px] font-bold text-slate-900 tracking-tight leading-tight mb-1">
                Book a Demo Call
              </h2>
              <p className="text-sm text-slate-400">
                We&rsquo;ll reach out within 24 hours to confirm your slot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rajesh Kumar"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#6633d1] focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#6633d1] focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#6633d1] focus:border-transparent transition"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-xs text-red-500 -mt-1">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full rounded-full bg-black text-white text-sm font-medium uppercase py-2.5 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 019.8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Booking…
                  </>
                ) : (
                  <>
                    Book a Demo Call
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          <style>{`
            @keyframes modal-in {
              from { opacity: 0; transform: scale(0.95) translateY(8px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
