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
    <section className="py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-6 pl-1">
          How it works
        </p>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span
                className="text-[80px] font-semibold text-white/6 leading-none mb-6 select-none"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.number}
              </span>
              <h3
                className="text-xl font-semibold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.headline}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
