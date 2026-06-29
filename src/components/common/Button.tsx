import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  id?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  arrow?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 focus-visible:outline-brand-600",
  ghost:
    "text-brand-600 hover:text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-600",
  dark:
    "bg-black text-white hover:bg-neutral-800 focus-visible:outline-black",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-[50px] py-2.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "md:px-8 py-3 px-6 text-xs md:text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

function ArrowIcon({ size }: { size: Size }) {
  const cls = size === "lg" ? "w-4 h-4" : "w-3 h-3";
  return (
    <svg className={cls} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({
  id,
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  type = "button",
  arrow,
}: ButtonProps) {
  const classes = clsx(base, variantStyles[variant], sizeStyles[size], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon size={size} />}
    </>
  );

  if (href) {
    return (
      <Link id={id} href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
