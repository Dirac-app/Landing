import { HighlightText } from "@/components/ui/highlight-text";
import { Pinstripe } from "@/components/ui/pinstripe";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteContainer } from "@/components/ui/site-container";

const left = [
  {
    title: "Separate clients and AI tabs",
    body: "You copy context between tools and still write every reply.",
  },
  {
    title: "Filters that never decide",
    body: "Labels move mail. They don’t tell you what matters today.",
  },
  {
    title: "Generic AI drafts",
    body: "Templates that sound like everyone else — and need a full rewrite.",
  },
  {
    title: "You are the integration layer",
    body: "Overnight mail waits until you open five apps in the morning.",
  },
] as const;

const right = [
  {
    title: "One agent on your inbox",
    body: "Brief, priorities, and drafts share the same thread context.",
  },
  {
    title: "Ranked by consequence",
    body: "What needs a decision rises. Noise waits.",
  },
  {
    title: "Drafts in your voice",
    body: "Calibrated to how you write — review and send.",
  },
  {
    title: "Ready when you wake",
    body: "Overnight processing means mornings start with decisions.",
  },
] as const;

export function Compare() {
  return (
    <>
      <Pinstripe />
      <section className="bg-white py-20 md:py-28">
        <SiteContainer>
          <SectionLabel>Compare</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl">
            One agent vs. a pile of tools that don&apos;t talk.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Faster clients and chatbots still leave you stitching context.
            Dirac is built to decide with you.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="border-b border-border px-6 py-4">
                <h3 className="text-sm font-semibold text-ink">Separate tools</h3>
              </div>
              <ol className="divide-y divide-border">
                {left.map((item, i) => (
                  <li key={item.title} className="flex gap-4 px-6 py-5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-bad text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="flex items-center justify-between bg-red-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-bad">
                <span>Still the integration layer</span>
                <span aria-hidden>✕</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="border-b border-border px-6 py-4">
                <h3 className="text-sm font-semibold text-ink">With Dirac</h3>
              </div>
              <ol className="divide-y divide-border">
                {right.map((item, i) => (
                  <li key={item.title} className="flex gap-4 px-6 py-5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-good text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="flex items-center justify-between bg-good px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white">
                <span>From $20/mo — decisions, not busywork</span>
                <span aria-hidden>+</span>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
            <HighlightText>
              Stop rebuilding context every morning. Spend more time on the
              threads that move the business.
            </HighlightText>
          </p>
        </SiteContainer>
      </section>
    </>
  );
}
