import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
