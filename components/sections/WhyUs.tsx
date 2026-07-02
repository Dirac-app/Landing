import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";
import { WhyUsCarousel } from "@/components/why-us/why-us-carousel";

export function WhyUs() {
  return (
    <SectionShell id="why" tone="canvas">
      <SectionEyebrow className="mb-6">Why us</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl">
        Built because founders shouldn&apos;t{" "}
        <span className="editorial-highlight">drown in email</span>.
      </h2>

      <p className="text-muted text-lg leading-relaxed max-w-2xl mb-16 md:mb-20">
        Most founders lose their first hours to triage, drafting, and follow-up — the same
        reactive loop, every morning. Dirac exists so your inbox is read, prioritized, and
        drafted before you open it.
      </p>

      <WhyUsCarousel />
    </SectionShell>
  );
}
