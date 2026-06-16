import { ByInstruction } from "@/components/sections/ByInstruction";
import { VoiceLearning } from "@/components/sections/VoiceLearning";
import { WhatMatters } from "@/components/sections/WhatMatters";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Spotlight } from "@/components/ui/spotlight";

const panels = [
  {
    id: "product-triage",
    number: "01",
    label: "What Matters",
    headline: "You only see what needs you.",
    body:
      "Stop guessing which emails deserve your attention. Dirac surfaces the threads that actually need your judgment — deals, investors, customers — and handles the rest before you wake up.",
    align: "right" as const,
    spotlight: {
      className: "top-0 left-0 hidden md:block",
      transform: "scaleX(-1) rotate(-12deg)",
    },
  },
  {
    id: "product-voice",
    number: "02",
    label: "Voice Learning",
    headline: "Replies that sound like you wrote them.",
    body:
      "No generic AI tone. Dirac learns how you actually write from your sent mail, then drafts replies you can send with one tap — calibrated to your voice, not a template.",
    align: "left" as const,
    spotlight: {
      className: "-top-10 right-0 hidden md:block",
      transform: "rotate(22deg)",
    },
  },
  {
    id: "product-instruction",
    number: "03",
    label: "By Instruction",
    headline: "Manage your inbox in plain English.",
    body:
      'Tell Dirac what you want: "star anything from investors," "archive newsletters from last month." It finds the threads, prepares the action, and waits for your one tap to apply.',
    align: "right" as const,
    spotlight: {
      className: "top-1/4 left-0 hidden md:block",
      transform: "scaleX(-1) rotate(8deg)",
    },
  },
];

function ProductVisual({ label }: { label: string }) {
  if (label === "What Matters") return <WhatMatters />;
  if (label === "Voice Learning") return <VoiceLearning />;
  if (label === "By Instruction") return <ByInstruction />;
  return null;
}

const titleFont = { fontFamily: "var(--font-space-grotesk)" };
const monoFont = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };

export function Product() {
  return (
    <div id="product" className="overflow-x-hidden">
      <section className="py-16 md:py-32 border-t-2 border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow className="mb-6">The product</SectionEyebrow>
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-5 max-w-3xl"
            style={titleFont}
          >
            See what Dirac does while you sleep.
          </h2>
          <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl">
            Your inbox is read, prioritized, and drafted before you open your laptop. You step in
            only where your judgment matters.
          </p>
        </div>
      </section>

      {panels.map((panel, i) => (
        <section
          key={panel.id}
          id={panel.id}
          className={`relative overflow-hidden py-12 md:py-24 ${i > 0 ? "border-t-2 border-white/[0.05]" : ""}`}
        >
          <Spotlight
            className={panel.spotlight.className}
            transform={panel.spotlight.transform}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-20 md:items-center ${
                panel.align === "right"
                  ? "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"
                  : ""
              }`}
            >
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-3 mb-5">
                  <span
                    className="text-sm text-accent tabular-nums tracking-widest"
                    style={monoFont}
                  >
                    {panel.number}
                  </span>
                  <span className="text-xs text-white/25 uppercase tracking-widest font-medium">
                    {panel.label}
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-5"
                  style={titleFont}
                >
                  {panel.headline}
                </h3>
                <p className="text-white/45 text-base leading-relaxed max-w-[400px]">
                  {panel.body}
                </p>
              </div>

              <div className="w-full max-w-[440px] mx-auto md:mx-0 min-w-0">
                <ProductVisual label={panel.label} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="h-8 md:h-12" aria-hidden />
    </div>
  );
}
