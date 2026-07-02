import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export function Solutions() {
  const without = [
    { time: "8:58am", text: "Alarm goes off. You already dread opening email." },
    { time: "9:04am", text: "30 unread. You read each one to find the important ones." },
    { time: "9:20am", text: "Scan subject lines, guess at urgency, miss context." },
    { time: "9:22am", text: "Reply to a prospect email." },
    { time: "9:41am", text: "Little did you know, there was an investor notice mail you missed." },
    { time: "10:15am", text: "1 Hour later, Still in inbox..." },
  ];

  const with_ = [
    { time: "8:00am", text: "Open your morning brief on your laptop." },
    { time: "8:03am", text: "Three things need your approval. Everything else is handled." },
    { time: "8:06am", text: "Review two drafts. Tap send." },
    { time: "8:08am", text: "10 minutes later, Done." },
  ];

  return (
    <SectionShell id="solutions" tone="canvas">
      <SectionEyebrow className="mb-6">The problem</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-14 md:mb-20 max-w-3xl">
        Your mornings shouldn&apos;t start in your{" "}
        <span className="editorial-highlight">inbox</span>.
        <br />
        <span className="text-muted">Same you, Completely different day.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="panel-card p-7 md:p-9 opacity-90">
          <h3 className="font-serif text-xl font-medium text-muted mb-10">
            Without Dirac
          </h3>
          <div className="flex flex-col">
            {without.map((item, i) => (
              <div key={i} className="flex gap-5 pb-7 last:pb-0 relative">
                {i < without.length - 1 && (
                  <div className="absolute left-[52px] top-6 bottom-0 w-px bg-border" />
                )}
                <span className="text-xs text-muted font-mono pt-0.5 w-12 shrink-0 text-right tabular-nums">
                  {item.time}
                </span>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card p-7 md:p-9">
          <h3 className="font-serif text-xl font-medium text-ink mb-10">
            With Dirac
          </h3>
          <div className="flex flex-col">
            {with_.map((item, i) => (
              <div key={i} className="flex gap-5 pb-7 last:pb-0 relative">
                {i < with_.length - 1 && (
                  <div className="absolute left-[52px] top-6 bottom-0 w-px bg-border" />
                )}
                <span className="text-xs text-muted font-mono pt-0.5 w-12 shrink-0 text-right tabular-nums">
                  {item.time}
                </span>
                <p
                  className={`text-sm leading-relaxed ${
                    i === with_.length - 1 ? "text-ink font-medium" : "text-ink/80"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
