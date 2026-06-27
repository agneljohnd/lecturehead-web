import { clsx } from "clsx";

type Color = "default" | "blue" | "green" | "orange" | "purple";

interface BadgeProps {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}

const colorStyles: Record<Color, string> = {
  default: "bg-slate-100 text-slate-700",
  blue:    "bg-brand-100 text-brand-700",
  green:   "bg-emerald-100 text-emerald-700",
  orange:  "bg-orange-100 text-orange-700",
  purple:  "bg-violet-100 text-violet-700",
};

export function Badge({ children, color = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colorStyles[color],
        className
      )}
    >
      {children}
    </span>
  );
}
