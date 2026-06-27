import { Container } from "@/components/layout/Container";

interface TrustBarProps {
  label: string;
  items: string[];
}

export function TrustBar({ label, items }: TrustBarProps) {
  return (
    <div className="border-y border-slate-100 bg-slate-50 py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">
            {label}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {items.map((item) => (
              <span key={item} className="text-sm font-medium text-slate-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
