"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative overflow-hidden rounded-[48px] border border-white/8 bg-white/2 shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500"
        >
          <Suspense fallback={<div className="absolute inset-0" />}>
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                opacity: isHovered ? 0.22 : 0.12,
                mixBlendMode: "screen",
                transition: "opacity 0.6s ease",
              }}
            >
              <Dithering
                colorBack="#00000000"
                colorFront="#F97316"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.15 : 0.06}
                style={{ width: "100%", height: "100%" }}
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
              </span>
              Now accepting waitlist applications
            </div>

            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Stop processing email.
              <br />
              <span className="text-white/60">Start your day already done.</span>
            </h2>

            <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Join founders and operators who wake up to a inbox that&apos;s already been read,
              prioritized, and responded to — in their voice.
            </p>

            <button className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-10 text-base font-semibold text-black transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]">
              <span>Join the Waitlist</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
