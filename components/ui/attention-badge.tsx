import { cn } from "@/lib/utils";

type AttentionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function AttentionBadge({ children, className }: AttentionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
