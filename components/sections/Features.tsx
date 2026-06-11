import { ByInstruction } from "@/components/sections/ByInstruction";
import { VoiceLearning } from "@/components/sections/VoiceLearning";
import { WhatMatters } from "@/components/sections/WhatMatters";
import { Spotlight } from "@/components/ui/spotlight";

const features = [
  {
    id: "feature-triage",
    number: "01",
    label: "What Matters",
    headline: "Dirac finds what matters.",
    body:
      "38 emails came in overnight, but most don't deserve your attention. Dirac reads every one, weighs sender, thread history, urgency, and your own past behavior — then surfaces only what needs you. The rest is filed, archived, or visible in the background.",
    align: "right" as const,
    spotlight: {
      // LEFT source — top-left corner, beam fans down-right toward the WhatMatters card
      className: "top-0 left-0",
      transform: "scaleX(-1) rotate(-12deg)",
    },
  },
  {
    id: "feature-voice",
    number: "02",
    label: "Voice Learning",
    headline: "Drafts that sound like you. Not like AI wrote them.",
    body:
      "Dirac reads your sent mail to build a deep model of your writing style, tone, and vocabulary. Every draft it produces is calibrated to your voice, Not a generic template.",
    align: "left" as const,
    spotlight: {
      // RIGHT source — top-right corner, steeper diagonal down toward the VoiceLearning card
      className: "-top-10 right-0",
      transform: "rotate(22deg)",
    },
  },
  {
    id: "feature-instruction",
    number: "03",
    label: "By Instruction",
    headline: "Email management as a sentence.",
    body:
      'Tell Dirac what you want done: "star anything from investors," "archive every newsletter from last month," "unsubscribe from anything I haven\'t opened in 90 days." It identifies the threads, drafts the action, waits for your one tap to apply.',
    align: "right" as const,
    spotlight: {
      // LEFT source — mid-left, shallower angle than 01, pointing toward the instruction input
      className: "top-1/4 left-0",
      transform: "scaleX(-1) rotate(8deg)",
    },
  },
];

function FeatureVisual({ label }: { label: string }) {
  if (label === "What Matters") return <WhatMatters />;
  if (label === "Voice Learning") return <VoiceLearning />;
  if (label === "By Instruction") return <ByInstruction />;
  return null;
}

const titleFont = { fontFamily: "var(--font-space-grotesk)" };
const monoFont = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };

export function Features() {
  return (
    <div id="features">
      {features.map((feature, i) => (
        <section
          key={feature.id}
          id={feature.id}
          // clip-path clips SVG filter effects (overflow-hidden doesn't)
          className={`relative py-16 md:py-24 [clip-path:inset(0)] ${i === 0 ? "pt-24 md:pt-32" : ""} ${i > 0 ? "border-t-2 border-white/[0.05]" : ""}`}
        >
          <Spotlight
            className={feature.spotlight.className}
            transform={feature.spotlight.transform}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                feature.align === "left"
                  ? ""
                  : "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"
              }`}
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-3 mb-5">
                  <span
                    className="text-sm text-accent tabular-nums tracking-widest"
                    style={monoFont}
                  >
                    {feature.number}
                  </span>
                  <span className="text-xs text-white/25 uppercase tracking-widest font-medium">
                    {feature.label}
                  </span>
                </div>
                <h3
                  className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5"
                  style={titleFont}
                >
                  {feature.headline}
                </h3>
                <p className="text-white/45 text-base leading-relaxed max-w-[400px]">
                  {feature.body}
                </p>
              </div>

              <FeatureVisual label={feature.label} />
            </div>
          </div>
        </section>
      ))}

      <div className="h-8 md:h-12" aria-hidden />
    </div>
  );
}
