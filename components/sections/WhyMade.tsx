import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export function WhyMade() {
  return (
    <SectionShell id="why-made" tone="canvas">
      <SectionEyebrow className="mb-6">Why it was made</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-8 max-w-3xl">
        Built because founders shouldn&apos;t{" "}
        <span className="editorial-highlight">drown in email</span>.
      </h2>

      <p className="text-muted text-lg leading-relaxed max-w-2xl">
        Most founders lose their first hours to triage, drafting, and follow-up — the same reactive
        loop, every morning. Dirac exists so your inbox is read, prioritized, and drafted before
        you open it, and you only step in where your judgment actually matters.
      </p>
    </SectionShell>
  );
}
