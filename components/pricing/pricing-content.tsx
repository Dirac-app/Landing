import { PageFrame } from "@/components/ui/page-frame";
import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { SiteHeader } from "@/components/ui/site-header";

export function PricingContent() {
  return (
    <PageFrame className="min-h-screen text-ink">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-x-hidden">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.1] tracking-tight mb-4">
            Simple pricing for founders who live in their{" "}
            <span className="editorial-highlight">inbox</span>.
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            7-day free trial. Cancel anytime.
          </p>
        </div>

        <PricingComparison showHeader={false} />

        <div className="mt-16 flex justify-center">
          <BuiltByNerodyn />
        </div>
      </main>
    </PageFrame>
  );
}
