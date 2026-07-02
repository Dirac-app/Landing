import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    number: "01",
    headline: "Connect Gmail or Outlook.",
    body: "One OAuth flow. Read-only access to your inbox. No passwords stored, no data sold.",
  },
  {
    number: "02",
    headline: "Dirac learns your voice.",
    body:
      "It reads your sent mail — not to store it, but to build a private model of how you write. The model lives with you.",
  },
  {
    number: "03",
    headline: "Wake up to your brief.",
    body:
      "Every morning, before you've touched your keyboard, Dirac has read, triaged, and drafted. Open the brief. Tap send on what you agree with. Move on.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" tone="panel">
      <SectionEyebrow className="mb-6">How it works</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-14 md:mb-20 max-w-2xl">
        Up and running in one <span className="editorial-highlight">afternoon</span>.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step) => (
          <article key={step.number} className="panel-card p-7 md:p-8 flex flex-col">
            <span className="text-sm text-muted font-mono tabular-nums tracking-widest mb-6">
              {step.number}
            </span>
            <h3 className="font-serif text-xl font-medium text-ink mb-4 leading-snug">
              {step.headline}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{step.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
