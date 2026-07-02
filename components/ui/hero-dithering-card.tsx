import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

export function CTASection() {
  return (
    <SectionShell tone="panel" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm text-muted mb-8">Now accepting waitlist applications</p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6 leading-[1.08]">
          Stop processing email.
          <br />
          <span className="text-muted">
            Start your day <span className="editorial-highlight">already done</span>.
          </span>
        </h2>

        <p className="text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Join founders and operators who wake up to a inbox that&apos;s already been read,
          prioritized, and responded to — in their voice.
        </p>

        <Button href="/pricing" size="lg" className="group">
          Join the Waitlist
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </SectionShell>
  );
}
