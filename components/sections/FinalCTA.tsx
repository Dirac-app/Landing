import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { SectionShell } from "@/components/ui/section-shell";

export function FinalCTA() {
  return (
    <SectionShell id="pricing" tone="panel">
      <div className="max-w-3xl mb-12 md:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-[1.08] tracking-tight mb-6">
          Stop processing email.
          <br />
          <span className="text-muted">Start your day </span>
          <span className="editorial-highlight">already done</span>
          <span className="text-muted">.</span>
        </h2>

        <p className="text-muted text-lg leading-relaxed max-w-xl">
          Start your 7-day free trial.
        </p>
      </div>

      <PricingComparison showHeader={false} />
    </SectionShell>
  );
}
