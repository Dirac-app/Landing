import { StartTrialCta } from "@/components/ui/start-trial-cta";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroDemoVideo } from "@/components/ui/hero-demo-video";

export function Hero() {
  return (
    <section
      className="relative isolate bg-black overflow-x-hidden pt-16 pb-10 md:pb-14"
      id="hero"
    >
      <AuroraBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 md:pt-14">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-white leading-[1.06] mb-6 md:mb-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            The email agent built around decisions,
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl">
            not busywork. Dirac is not just an inbox. It&apos;s a product made with a
            belief that founders shouldn&apos;t be their own email assistants. Dirac
            lets you know what&apos;s important for the day, and the AI sorts out
            everything in the background.
          </p>

          <StartTrialCta centered />
        </div>

        <HeroDemoVideo />
      </div>
    </section>
  );
}
