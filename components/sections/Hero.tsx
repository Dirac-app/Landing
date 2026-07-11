import { HeroDemoVideo } from "@/components/ui/hero-demo-video";
import { HeroWaitlistCta } from "@/components/ui/hero-waitlist-cta";

export function Hero() {
  return (
    <section
      className="relative isolate w-full bg-white"
      id="hero"
    >
      <div className="hero-bg-layer" aria-hidden>
        <img
          src="/Dirac_New_BG.png"
          alt=""
          width={2752}
          height={1536}
          className="hero-bg-image"
          fetchPriority="high"
        />
      </div>

      <div className="hero-content mx-auto w-full max-w-[90rem]">
        <div className="mx-auto w-full max-w-3xl shrink-0 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            The email agent built around{" "}
            <span className="hero-highlight">decisions</span>,
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted md:mt-6 md:text-xl">
            not busywork.
          </p>

          <div className="mt-8 flex flex-col items-center md:mt-10">
            <HeroWaitlistCta />
          </div>
        </div>

        <HeroDemoVideo className="hero-demo-panel" />
      </div>
    </section>
  );
}
