import Link from "next/link";

interface InternalLink {
  label: string;
  href: string;
  tag?: string;
  date?: string;
  description?: string;
}

interface InternalLinksProps {
  heading: string;
  subheading?: string;
  links: InternalLink[];
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export function InternalLinks({ links }: InternalLinksProps) {
  return (
    <section className="bg-white py-10 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-2xl lg:text-[40px] font-medium tracking-[-0.03em] text-slate-900 leading-[1.2] max-w-2xl mx-auto mb-10 md:mb-14">
          Practical guides on course creation, live classes, and community building
        </h2>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="playbook-card group"
                style={{
                  background: "transparent",
                  borderRadius: 0,
                  overflow: "visible",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  borderBottom: "2px solid #e7e7e2",
                  padding: "0 clamp(12px, 3vw, 16px)",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
              >
                {/* Body */}
                <div
                  style={{
                    padding: "0 0 clamp(20px, 2.4vw, 28px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  {link.tag && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#6b7280",
                        background: "#E5E2FF",
                        borderRadius: 100,
                        padding: "4px 10px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {link.tag}
                    </span>
                  )}

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "clamp(20px, 1.8vw, 24px)",
                      fontWeight: 400,
                      lineHeight: 1.28,
                      letterSpacing: "-0.02em",
                      color: "#15191d",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {link.label}
                  </h3>
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 0 12px",
                  }}
                >
                  {link.date && (
                    <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                      {link.date}
                    </span>
                  )}

                  <span
                    className="card-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: "#1a1d20",
                      color: "#fff",
                      borderRadius: 40,
                      padding: "10px 20px",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      READ MORE
                    </span>
                    <span style={{ display: "inline-grid", placeItems: "center", flexShrink: 0 }}>
                      <ArrowIcon />
                    </span>
                  </span>
                </div>
              </Link>

              <style>{`
                .playbook-card:hover .card-cta {
                  background: #2e3338;
                  transform: translateY(-1px);
                }
              `}</style>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
