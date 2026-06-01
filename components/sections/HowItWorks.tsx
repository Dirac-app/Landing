import { SectionEyebrow } from "@/components/ui/section-eyebrow";

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

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

export function HowItWorks() {
  return (
    <section className="py-24 md:py-36" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">How it works</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-16 md:mb-20 max-w-2xl"
          style={titleFont}
        >
          Up and running in one afternoon.
        </h2>

        {/* Hero moment: connected step path on desktop */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-[52px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden
          />

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-medium text-accent tabular-nums"
                    style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
                  >
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden md:block flex-1 h-px bg-white/6" aria-hidden />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug" style={titleFont}>
                  {step.headline}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
