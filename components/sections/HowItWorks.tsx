import { Pinstripe } from "@/components/ui/pinstripe";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteContainer } from "@/components/ui/site-container";

const steps = [
  {
    step: "Step 1",
    label: "Connect",
    title: "Link your inbox in minutes",
    body: "OAuth with Gmail or Outlook. No passwords stored. Dirac starts reading with the access you approve.",
    visual: "inbox",
  },
  {
    step: "Step 2",
    label: "Learn",
    title: "It learns how you write",
    body: "Dirac studies your sent mail privately — tone, vocabulary, and how you close loops — so drafts sound like you.",
    visual: "voice",
  },
  {
    step: "Step 3",
    label: "Decide",
    title: "Wake up to a brief",
    body: "Priorities, summaries, and ready-to-send replies land before your first meeting. You approve. Nothing sends alone.",
    visual: "brief",
  },
] as const;

function StepVisual({ kind }: { kind: (typeof steps)[number]["visual"] }) {
  if (kind === "inbox") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl bg-canvas-deep p-5">
        <div className="rounded-lg border border-border bg-white px-3 py-2 text-xs text-muted shadow-sm">
          you@company.com
        </div>
        <div className="rounded-lg border border-ink bg-ink px-3 py-2 text-center text-xs font-semibold text-white">
          Connect inbox
        </div>
      </div>
    );
  }

  if (kind === "voice") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl bg-canvas-deep p-5">
        {["Short and direct", "Warm but crisp", "Always close the loop"].map((line) => (
          <div
            key={line}
            className="rounded-lg border border-border bg-white px-3 py-2 text-xs text-ink shadow-sm"
          >
            {line}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-xl bg-canvas-deep p-5">
      <div className="rounded-lg border border-border bg-white p-3 shadow-sm">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
          Morning brief
        </p>
        <p className="mt-1 text-xs font-medium text-ink">3 need you · 2 drafts ready</p>
      </div>
      <div className="rounded-lg border border-border bg-white px-3 py-2 text-xs text-muted shadow-sm">
        Investor follow-up — draft ready
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <>
      <Pinstripe />
      <section id="how" className="bg-white py-20 md:py-28">
        <SiteContainer>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl">
            Up and running in minutes. Not days of tool setup.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((item) => (
              <article
                key={item.step}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[4/3] border-b border-border p-4">
                  <span className="absolute left-4 top-4 rounded-md border border-border bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted">
                    {item.step}
                  </span>
                  <div className="h-full pt-8">
                    <StepVisual kind={item.visual} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
