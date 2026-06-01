import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function WhyMade() {
  return (
    <section className="py-24 md:py-36" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">Why it was made</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-8 max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Built because founders shouldn&apos;t drown in email.
        </h2>

        <p className="text-white/45 text-lg leading-relaxed max-w-2xl">
          Most founders lose their first hours to triage, drafting, and follow-up — the same reactive
          loop, every morning. Dirac exists so your inbox is read, prioritized, and drafted before
          you open it, and you only step in where your judgment actually matters.
        </p>
      </div>
    </section>
  );
}
