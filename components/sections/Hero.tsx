import { StartTrialCta } from "@/components/ui/start-trial-cta";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MorningBrief } from "@/components/sections/MorningBrief";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-screen flex items-center pt-16 bg-black overflow-x-hidden"
      id="hero"
    >
      <AuroraBackground variant="hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left — content */}
          <div className="flex flex-col">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-white leading-[1.06] mb-7"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The email agent built around decisions,
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[440px]">
              not busywork. Dirac is not just an inbox. It&apos;s a product made with a
              belief that founders shouldn&apos;t be their own email assistants. Dirac
              lets you know what&apos;s important for the day, and the AI sorts out
              everything in the background.
            </p>

            <StartTrialCta />

            <div className="mt-10 w-full max-w-[420px] md:hidden">
              <MorningBrief />
            </div>
          </div>

          {/* Right — morning brief */}
          <div className="relative hidden md:flex items-start justify-end overflow-visible min-h-0 pl-36 pr-0 lg:pl-40 lg:pr-4">
            <div className="relative z-[1] isolate translate-x-6 -translate-y-3.5 lg:translate-x-10 lg:-translate-y-3.5 mt-0 overflow-visible">
              <MorningBrief />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
