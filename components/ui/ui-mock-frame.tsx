import { cn } from "@/lib/utils";

type UiMockFrameProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

/** Solid product UI frame — matches hero demo panel (no glass/blur). */
export function UiMockFrame({ children, className, innerClassName }: UiMockFrameProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-panel p-2 md:p-3",
        "shadow-[0_2px_8px_rgba(31,27,24,0.05),0_16px_40px_rgba(31,27,24,0.08)]",
        className,
      )}
    >
      <div className={cn("rounded-xl bg-panel", innerClassName)}>{children}</div>
    </div>
  );
}
