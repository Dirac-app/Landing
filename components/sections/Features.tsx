import { ByInstruction } from "@/components/sections/ByInstruction";
import { VoiceLearning } from "@/components/sections/VoiceLearning";
import { WhatMatters } from "@/components/sections/WhatMatters";

const features = [
  {
    label: "What Matters",
    headline: "Dirac finds what matters.",
    body:
      "38 emails came in overnight. Most don't deserve your attention. Dirac reads every one, weighs sender, thread history, urgency, and your own past behavior — then surfaces only what needs you. The rest is filed, archived, or visible in the background.",
    align: "right",
  },
  {
    label: "Voice Learning",
    headline: "Drafts that sound like you. Not like AI wrote them.",
    body:
      "Dirac reads your sent mail to build a deep model of your writing style, tone, and vocabulary. Every draft it produces is calibrated to your voice — not a generic template.",
    align: "left",
  },
  {
    label: "By Instruction",
    headline: "Email management as a sentence.",
    body:
      'Tell Dirac what you want done — "star anything from investors," "archive every newsletter from last month," "unsubscribe from anything I haven\'t opened in 90 days." It identifies the threads, drafts the action, waits for your one tap to apply.',
    align: "right",
  },
];

function FeatureVisual({ label }: { label: string }) {
  if (label === "What Matters") return <WhatMatters />;
  if (label === "Voice Learning") return <VoiceLearning />;
  if (label === "By Instruction") return <ByInstruction />;
  return <ScreenshotPlaceholder label={label} />;
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="screenshot-placeholder w-full aspect-[16/10] min-h-[220px] flex flex-col items-center justify-center gap-2.5 px-8 text-center">
      <div className="w-6 h-6 rounded-md border border-white/10 bg-white/4 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
      <p className="text-white/18 text-xs font-mono tracking-wide">
        {label} — screenshot coming soon
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-24 md:py-36" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-6 pl-1">
          What Dirac does
        </p>

        <div className="flex flex-col gap-32 md:gap-40">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                feature.align === "left" ? "" : "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"
              }`}
            >
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs text-white/30 uppercase tracking-widest font-medium mb-5">
                  {feature.label}
                </span>
                <h3
                  className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {feature.headline}
                </h3>
                <p className="text-white/45 text-base leading-relaxed max-w-[400px]">
                  {feature.body}
                </p>
              </div>

              <FeatureVisual label={feature.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
