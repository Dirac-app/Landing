import { PricingComparison } from "@/components/pricing/pricing-comparison";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-40 overflow-x-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-6 min-w-0">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Stop processing email.
            <br />
            <span className="text-white/35">Start your day already done.</span>
          </h2>

          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
            Start your 7-day free trial.
          </p>
        </div>

        <PricingComparison showHeader={false} />
      </div>
    </section>
  );
}
