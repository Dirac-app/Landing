import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const differentiators = [
  {
    title: "Not a faster inbox",
    body: "Gmail organizes what arrives. Superhuman helps you move through it faster. Dirac handles it before you wake up — you start as a decision-maker, not an operator.",
  },
  {
    title: "AI that does the work",
    body: "Superhuman makes you faster at triage. Dirac triages, drafts, and prepares replies overnight. You review and send — you don't write from scratch.",
  },
  {
    title: "Always on, fraction of the cost",
    body: "A full-time assistant costs $3,000+/month, works 9–5, and needs training. Dirac runs 24/7 for $20/month and learns your voice in under 10 minutes.",
  },
  {
    title: "Your voice, your approval",
    body: "Nothing sends without your tap. Dirac drafts in your tone from your sent mail — private to you, never sold, never sent on autopilot.",
  },
];

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

export function WhyUs() {
  return (
    <section className="py-24 md:py-36" id="why">
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

        <div className="grid md:grid-cols-2 gap-5">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
            >
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={titleFont}
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
