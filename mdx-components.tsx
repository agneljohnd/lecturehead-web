import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Custom MDX component overrides.
 * Add components here to use them inside .mdx files without importing.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override anchor tags with Next.js Link for internal links
    a: ({ href, children, ...props }) => {
      if (href?.startsWith("/")) {
        return <Link href={href} {...props}>{children}</Link>;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    ...components,
  };
}
