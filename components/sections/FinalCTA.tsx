import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/ui/site-container";
import { SIGNUP_URL } from "@/lib/urls";

export function FinalCTA() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <SiteContainer>
        <div className="relative overflow-hidden rounded-3xl min-h-[22rem] md:min-h-[26rem]">
          <img
            src="/Dirac_New_BG.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" aria-hidden />

          <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[26rem]">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
              Get started
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-white md:text-5xl">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Connect your inbox, and let Dirac brief you overnight. Wake up to
              decisions — not a pile.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={SIGNUP_URL}>
                Get started
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Button>
              <Button
                href="#how"
                variant="secondary"
                className="border-white bg-white text-ink hover:border-white hover:bg-white/90"
              >
                See how it works
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
