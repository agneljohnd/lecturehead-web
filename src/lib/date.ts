/** Formats ISO date string to human-readable e.g. "June 1, 2026" */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Returns ISO date string, defaulting to today if not provided */
export function isoDate(date?: string): string {
  return date ?? new Date().toISOString().split("T")[0];
}
