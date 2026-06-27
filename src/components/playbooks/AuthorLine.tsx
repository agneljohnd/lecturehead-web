import { formatDate } from "@/lib/date";

interface AuthorLineProps {
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
}

export function AuthorLine({ author, publishedAt, updatedAt, readingTime }: AuthorLineProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
      <span>By {author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={publishedAt}>Published {formatDate(publishedAt)}</time>
      {updatedAt && updatedAt !== publishedAt && (
        <>
          <span aria-hidden="true">·</span>
          <time dateTime={updatedAt}>Updated {formatDate(updatedAt)}</time>
        </>
      )}
      <span aria-hidden="true">·</span>
      <span>{readingTime}</span>
    </div>
  );
}
