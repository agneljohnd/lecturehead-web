export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const primaryNav: NavLink[] = [
  { label: "Features",  href: "/#features" },
  { label: "Stories",   href: "/#stories" },
  { label: "Pricing",   href: "/#pricing" },
  { label: "Playbooks", href: "/playbooks" },
];

export const ctaNav = {
  label: "Book a Demo",
  href: "/demo",
};
