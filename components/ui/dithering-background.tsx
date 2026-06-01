"use client";

import { Suspense, lazy } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

type DitheringBackgroundProps = {
  /** Soft cutout only where the morning brief sits — dithering stays visible elsewhere on the right */
  variant?: "full" | "hero";
};

export function DitheringBackground({ variant = "full" }: DitheringBackgroundProps) {
  // Radial hole centered on the brief (~lower-right of hero). Rest of page keeps full dithering.
  const heroMask =
    variant === "hero"
      ? {
          maskImage:
            "radial-gradient(ellipse 200px 280px at 82% 48%, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 60%, black 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 200px 280px at 82% 48%, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 60%, black 88%)",
        }
      : undefined;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <Suspense fallback={null}>
        <div
          style={{
            opacity: variant === "hero" ? 0.14 : 0.1,
            mixBlendMode: "screen",
            width: "100%",
            height: "100%",
            ...heroMask,
          }}
        >
          <Dithering
            colorBack="#00000000"
            colorFront="#FFFAE0"
            shape="warp"
            type="4x4"
            speed={0.08}
            style={{ width: "100%", height: "100%" }}
            minPixelRatio={1}
          />
        </div>
      </Suspense>
    </div>
  );
}
