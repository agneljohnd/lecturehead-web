const WORDS_PER_MINUTE = 200;

/** Returns reading time string like "5 min read" */
export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return `${minutes} min read`;
}
