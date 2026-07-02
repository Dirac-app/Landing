import { Check, X } from "lucide-react";

export function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-ink/80 leading-snug">
          <Check className="h-4 w-4 text-muted shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DemeritList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted leading-snug">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-canvas mt-0.5">
            <X className="h-2.5 w-2.5 text-muted" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
