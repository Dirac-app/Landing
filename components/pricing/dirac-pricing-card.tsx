import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BenefitList } from "@/components/pricing/pricing-lists";
import { SIGNUP_URL } from "@/lib/urls";

const DIRAC_BENEFITS = [
  "Works 24/7 — your inbox handled before you wake up",
  "Never write another email from scratch",
  "Inbox triaged and prioritized automatically",
  "Start saving time in under 10 minutes",
  "Drafts in your voice, not generic AI templates",
  "Morning brief with summaries and ready-to-send replies",
] as const;

type DiracPricingCardProps = {
  annual: boolean;
};

export function DiracPricingCard({ annual }: DiracPricingCardProps) {
  return (
    <div className="order-1 lg:order-2 relative z-10 min-w-0 w-full">
      <div className="panel-card flex flex-col p-7 md:p-8 lg:py-10 h-full min-h-0 lg:min-h-[560px]">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-medium text-ink mb-1">Dirac</h2>
          <p className="text-sm text-muted">Get 10+ hours back every week</p>
        </div>

        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-ink">
              ${annual ? 200 : 20}
            </span>
            <span className="text-muted text-base">
              {annual ? "per year" : "per month"}
            </span>
          </div>
          {annual && (
            <p className="text-sm text-muted mt-2">Save $40 vs monthly billing</p>
          )}
          <p className="text-sm text-muted mt-2">7-day free trial</p>
        </div>

        <div className="flex-1">
          <BenefitList items={DIRAC_BENEFITS} />
        </div>

        <Button href={SIGNUP_URL} size="md" className="mt-8 w-full">
          Start Free Trial
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
