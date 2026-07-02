import { ByInstruction } from "@/components/sections/ByInstruction";
import { VoiceLearning } from "@/components/sections/VoiceLearning";
import { WhatMatters } from "@/components/sections/WhatMatters";
import { SectionShell } from "@/components/ui/section-shell";

const features = [
  {
    id: "feature-triage",
    number: "01",
    label: "What Matters",
    headline: (
      <>
        Dirac finds what <span className="editorial-highlight">matters</span>.
      </>
    ),
    body:
      "38 emails came in overnight, but most don't deserve your attention. Dirac reads every one, weighs sender, thread history, urgency, and your own past behavior — then surfaces only what needs you. The rest is filed, archived, or visible in the background.",
    align: "right" as const,
    tone: "canvas" as const,
  },
  {
    id: "feature-voice",
    number: "02",
    label: "Voice Learning",
    headline: (
      <>
        Drafts that sound like you. Not like <span className="editorial-highlight">AI wrote them</span>.
      </>
    ),
    body:
      "Dirac reads your sent mail to build a deep model of your writing style, tone, and vocabulary. Every draft it produces is calibrated to your voice, Not a generic template.",
    align: "left" as const,
    tone: "panel" as const,
  },
  {
    id: "feature-instruction",
    number: "03",
    label: "By Instruction",
    headline: (
      <>
        Email management as a <span className="editorial-highlight">sentence</span>.
      </>
    ),
    body:
      'Tell Dirac what you want done: "star anything from investors," "archive every newsletter from last month," "unsubscribe from anything I haven\'t opened in 90 days." It identifies the threads, drafts the action, waits for your one tap to apply.',
    align: "right" as const,
    tone: "canvas" as const,
  },
];

function FeatureVisual({ label }: { label: string }) {
  if (label === "What Matters") return <WhatMatters />;
  if (label === "Voice Learning") return <VoiceLearning />;
  if (label === "By Instruction") return <ByInstruction />;
  return null;
}

export function Features() {
  return (
    <div id="features">
      {features.map((feature) => (
        <SectionShell
          key={feature.id}
          id={feature.id}
          tone={feature.tone}
          className="py-20 md:py-28"
        >
          <div
            className={`flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-16 lg:gap-24 md:items-center ${
              feature.align === "right"
                ? "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"
                : ""
            }`}
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm text-muted font-mono tabular-nums tracking-widest">
                  {feature.number}
                </span>
                <span className="text-xs text-muted uppercase tracking-widest font-medium">
                  {feature.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-[2rem] font-medium text-ink leading-[1.12] mb-6">
                {feature.headline}
              </h3>
              <p className="text-muted text-base leading-relaxed max-w-md">{feature.body}</p>
            </div>

            <div className="w-full max-w-[440px] mx-auto md:mx-0 min-w-0">
              <FeatureVisual label={feature.label} />
            </div>
          </div>
        </SectionShell>
      ))}
    </div>
  );
}
