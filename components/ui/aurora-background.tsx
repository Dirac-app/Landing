"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import React from "react";

type AuroraBackgroundProps = React.HTMLProps<HTMLDivElement> & {
  showRadialGradient?: boolean;
  variant?: "full" | "hero";
};

const heroMask = {
  maskImage:
    "radial-gradient(ellipse 200px 280px at 82% 48%, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 60%, black 88%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 200px 280px at 82% 48%, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 60%, black 88%)",
};

export function AuroraBackground({
  className,
  showRadialGradient = true,
  variant = "full",
  ...props
}: AuroraBackgroundProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "120px" });

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ zIndex: 0, ...(variant === "hero" ? heroMask : undefined) }}
      aria-hidden
      {...props}
    >
      <div
        className={cn(
          `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            aurora-layer
            pointer-events-none
            absolute inset-0 opacity-40`,
          inView && "aurora-layer--active",
          showRadialGradient &&
            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
        )}
      />
    </div>
  );
}
