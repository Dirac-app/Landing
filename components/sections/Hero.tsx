import { StartTrialCta } from "@/components/ui/start-trial-cta";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MorningBrief } from "@/components/sections/MorningBrief";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-black overflow-x-visible" id="hero">
      <AuroraBackground variant="hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left — content */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-white/50 mb-10 w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-light"></span>
              </span>
              launching soon
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-white leading-[1.06] mb-7"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Your inbox,
              <br />
              already handled
              <br />
              <span className="text-white/40">by 7am.</span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[440px]">
              Dirac connects to Gmail or Outlook, learns your voice from sent
              mail, and delivers a morning brief — summaries, priorities, and
              ready-to-send drafts. Before you open your laptop.
            </p>

            <StartTrialCta />
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
