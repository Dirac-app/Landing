import { SectionEyebrow } from "@/components/ui/section-eyebrow";

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
    { time: "7:08am", text: "Done.", accent: true },
    { time: "", text: "" },
  ];

  return (
    <section className="py-28 md:py-36" id="scenario">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">The 7am scenario</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-14 md:mb-16 max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          The same inbox.
          <br />
          <span className="text-white/35">Two very different mornings.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-0 md:gap-0">
          {/* Without Dirac */}
          <div className="pr-0 md:pr-16 pb-12 md:pb-0 md:border-r border-white/6">
            <h3
              className="text-xl font-semibold text-white/25 mb-10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Without Dirac
            </h3>
            <div className="flex flex-col gap-0">
              {without.map((item, i) => (
                <div key={i} className="flex gap-5 pb-7 relative">
                  {/* Timeline line */}
                  {i < without.length - 1 && (
                    <div className="absolute left-[52px] top-6 bottom-0 w-px bg-white/5" />
                  )}
                  <span className="text-xs text-white/20 font-mono pt-0.5 w-12 shrink-0 text-right">
                    {item.time}
                  </span>
                  <p className="text-sm text-white/30 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With Dirac */}
          <div className="pl-0 md:pl-16 pt-12 md:pt-0 border-t md:border-t-0 border-white/6">
            <h3
              className="text-xl font-semibold text-white/90 mb-10"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              With Dirac
            </h3>
            <div className="flex flex-col gap-0">
              {with_.map((item, i) => (
                <div key={i} className="flex gap-5 pb-7 relative">
                  {i < with_.length - 2 && (
                    <div className="absolute left-[52px] top-6 bottom-0 w-px bg-white/8" />
                  )}
                  {item.text ? (
                    <>
                      <span
                        className={`text-xs font-mono pt-0.5 w-12 shrink-0 text-right ${
                          item.accent ? "text-accent" : "text-white/35"
                        }`}
                      >
                        {item.time}
                      </span>
                      <p
                        className={`text-sm leading-relaxed font-medium ${
                          item.accent
                            ? "text-gradient-accent text-base font-semibold"
                            : "text-white/70"
                        }`}
                      >
                        {item.text}
                      </p>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
