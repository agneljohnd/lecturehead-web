export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Playbooks", href: "/playbooks" },
      // { label: "Features", href: "/features" },
      // { label: "Pricing", href: "/pricing" },
      // { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Educators",
    links: [
      // { label: "K-12 Teachers", href: "/solutions/k12" },
      // { label: "Higher Education", href: "/solutions/higher-ed" },
      // { label: "School Admins", href: "/solutions/admins" },
    ],
  },
  {
    heading: "Company",
    links: [
      // { label: "About", href: "/about" },
      // { label: "Contact", href: "/contact" },
      // { label: "Privacy Policy", href: "/privacy" },
      // { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const footerMeta = {
  tagline: "The LMS built for educators, not IT departments.",
  copyright: `© ${new Date().getFullYear()} LectureHead. All rights reserved.`,
};
