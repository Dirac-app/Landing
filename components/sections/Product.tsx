import { ByInstruction } from "@/components/sections/ByInstruction";
import { VoiceLearning } from "@/components/sections/VoiceLearning";
import { WhatMatters } from "@/components/sections/WhatMatters";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

const panels = [
  {
    id: "product-triage",
    number: "01",
    label: "What Matters",
    headline: (
      <>
        You only see what <span className="editorial-highlight">needs you</span>.
      </>
    ),
    body:
      "Stop guessing which emails deserve your attention. Dirac surfaces the threads that actually need your judgment — deals, investors, customers — and handles the rest before you wake up.",
    align: "right" as const,
    tone: "canvas" as const,
  },
  {
    id: "product-voice",
    number: "02",
    label: "Voice Learning",
    headline: (
      <>
        Replies that <span className="editorial-highlight">sound like you</span> wrote them.
      </>
    ),
    body:
      "No generic AI tone. Dirac learns how you actually write from your sent mail, then drafts replies you can send with one tap — calibrated to your voice, not a template.",
    align: "left" as const,
    tone: "panel" as const,
  },
  {
    id: "product-instruction",
    number: "03",
    label: "By Instruction",
    headline: (
      <>
        Manage your inbox in <span className="editorial-highlight">plain English</span>.
      </>
    ),
    body:
      'Tell Dirac what you want: "star anything from investors," "archive newsletters from last month." It finds the threads, prepares the action, and waits for your one tap to apply.',
    align: "right" as const,
    tone: "canvas" as const,
  },
];

function ProductVisual({ label }: { label: string }) {
  if (label === "What Matters") return <WhatMatters />;
  if (label === "Voice Learning") return <VoiceLearning />;
  if (label === "By Instruction") return <ByInstruction />;
  return null;
}

export function Product() {
  return (
    <div id="product" className="overflow-x-hidden">
      <SectionShell tone="panel" className="pb-16 md:pb-20">
        <SectionEyebrow className="mb-6">The product</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-6 max-w-3xl">
          See what Dirac does while you{" "}
          <span className="editorial-highlight">sleep</span>.
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
          Your inbox is read, prioritized, and drafted before you open your laptop. You step in
          only where your judgment matters.
        </p>
      </SectionShell>

      {panels.map((panel) => (
        <SectionShell
          key={panel.id}
          id={panel.id}
          tone={panel.tone}
          className="py-20 md:py-28"
        >
          <div
            className={`flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-16 lg:gap-24 md:items-center ${
              panel.align === "right"
                ? "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"
                : ""
            }`}
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm text-muted font-mono tabular-nums tracking-widest">
                  {panel.number}
                </span>
                <span className="text-xs text-muted uppercase tracking-widest font-medium">
                  {panel.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-[2rem] font-medium text-ink leading-[1.12] mb-6">
                {panel.headline}
              </h3>
              <p className="text-muted text-base md:text-[1.05rem] leading-relaxed max-w-md">
                {panel.body}
              </p>
            </div>

            <div className="w-full max-w-[440px] mx-auto md:mx-0 min-w-0">
              <ProductVisual label={panel.label} />
            </div>
          </div>
        </SectionShell>
      ))}
    </div>
  );
}
