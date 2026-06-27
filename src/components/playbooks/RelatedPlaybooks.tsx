import { PlaybookCard } from "./PlaybookCard";
import type { Playbook } from "@/lib/content";

interface RelatedPlaybooksProps {
  playbooks: Playbook[];
}

export function RelatedPlaybooks({ playbooks }: RelatedPlaybooksProps) {
  if (playbooks.length === 0) return null;

  return (
    <aside aria-label="Related playbooks" className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Related Playbooks</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {playbooks.map((p) => (
          <li key={p.slug}>
            <PlaybookCard playbook={p} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
