import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroDemoVideo } from "@/components/ui/hero-demo-video";
import { SIGNUP_URL } from "@/lib/urls";

export function Hero() {
  return (
    <section
      className="relative isolate w-full bg-white"
      id="hero"
    >
      <div className="hero-bg-layer" aria-hidden>
        <img
          src="/Dirac_Landing_BG.png"
          alt=""
          width={2528}
          height={1696}
          className="hero-bg-image"
          fetchPriority="high"
        />
        <div className="hero-bg-bottom-fade" />
      </div>

      <div className="hero-content mx-auto w-full max-w-[90rem]">
        <div className="mx-auto w-full max-w-3xl shrink-0 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            The email agent built around{" "}
            <span className="editorial-highlight">decisions</span>,
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted md:mt-6 md:text-xl">
            not busywork.
          </p>

          <div className="mt-8 flex flex-col items-center md:mt-10">
            <Button href={SIGNUP_URL} size="md">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <p className="mt-3 text-sm text-muted">7-day free trial</p>
          </div>
        </div>

        <HeroDemoVideo className="hero-demo-panel" />
      </div>
    </section>
  );
}
