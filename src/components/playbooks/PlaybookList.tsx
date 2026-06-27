import { PlaybookCard } from "./PlaybookCard";
import type { Playbook } from "@/lib/content";

interface PlaybookListProps {
  playbooks: Playbook[];
  emptyMessage?: string;
}

export function PlaybookList({ playbooks, emptyMessage = "No playbooks yet." }: PlaybookListProps) {
  if (playbooks.length === 0) {
    return <p className="text-center text-slate-500 py-16">{emptyMessage}</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {playbooks.map((playbook) => (
        <li key={playbook.slug}>
          <PlaybookCard playbook={playbook} />
        </li>
      ))}
    </ul>
  );
}
