import { Container } from "./Container";
import { clsx } from "clsx";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps the <main> tag with consistent vertical spacing.
 * Use this inside every page's top-level return.
 */
export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={clsx("flex-1", className)}>
      {children}
    </main>
  );
}

/** Section with vertical padding — use to separate blocks */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-16 lg:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
