import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  /** @deprecated All sections use the page white background. Kept for call-site compat. */
  tone?: "canvas" | "canvas-deep" | "panel";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 overflow-x-hidden", className)}>
      <div className={cn("max-w-7xl mx-auto px-6", containerClassName)}>{children}</div>
    </section>
  );
}
