import { Check, X } from "lucide-react";

export function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-white/75 leading-snug">
          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
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
        <li key={item} className="flex items-start gap-3 text-sm text-white/35 leading-snug">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/15 mt-0.5">
            <X className="h-2.5 w-2.5 text-red-400/80" strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
