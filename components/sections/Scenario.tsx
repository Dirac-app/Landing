import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export function Scenario() {
  const without = [
    { time: "6:58am", text: "Alarm goes off." },
    { time: "7:04am", text: "Open email. 47 unread." },
    { time: "7:09am", text: "Scan subject lines. Three look urgent." },
    { time: "7:22am", text: "Reply to one thread. Lose the thread of two others." },
    { time: "7:41am", text: "Still in inbox. Coffee is cold." },
    { time: "8:15am", text: "First meeting. You're not ready." },
  ];

  const with_ = [
    { time: "6:58am", text: "Alarm goes off." },
    { time: "7:01am", text: "Open Dirac brief on your phone." },
    { time: "7:03am", text: "Three things actually need you today. The rest is handled." },
    { time: "7:06am", text: "Review two drafts. Tap send." },
    { time: "7:08am", text: "Done." },
  ];

  return (
    <SectionShell id="scenario" tone="canvas">
      <SectionEyebrow className="mb-6">The 7am scenario</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-14 md:mb-20 max-w-3xl">
        The same <span className="editorial-highlight">inbox</span>.
        <br />
        <span className="text-muted">Two very different mornings.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="panel-card p-7 md:p-9 opacity-90">
          <h3 className="font-serif text-xl font-medium text-muted mb-10">Without Dirac</h3>
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
          <h3 className="font-serif text-xl font-medium text-ink mb-10">With Dirac</h3>
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
