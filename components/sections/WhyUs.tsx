import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { WhyUsCarousel } from "@/components/why-us/why-us-carousel";

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

export function WhyUs() {
  return (
    <section className="py-20 md:py-36 overflow-x-hidden" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">Why us</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-6 max-w-3xl"
          style={titleFont}
        >
          Built because founders shouldn&apos;t drown in email.
        </h2>

        <p className="text-white/45 text-lg leading-relaxed max-w-2xl mb-14 md:mb-16">
          Most founders lose their first hours to triage, drafting, and follow-up — the same
          reactive loop, every morning. Dirac exists so your inbox is read, prioritized, and
          drafted before you open it.
        </p>

        <WhyUsCarousel />
      </div>
    </section>
  );
}
