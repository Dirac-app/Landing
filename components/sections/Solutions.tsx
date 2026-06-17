import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function Solutions() {
  const without = [
    { time: "8:58am", text: "Alarm goes off. You already dread opening email." },
    { time: "9:04am", text: "30 unread. You read each one to find the important ones." },
    { time: "9:20am", text: "Scan subject lines, guess at urgency, miss context." },
    { time: "9:22am", text: "Reply to a prospect email." },
    { time: "9:41am", text: "Little did you know, there was an investor notice mail you missed." },
    { time: "10:15am", text: "1 Hour later, Still in inbox...", accent: true },
  ];

  const with_ = [
    { time: "8:00am", text: "Open your morning brief on your laptop." },
    { time: "8:03am", text: "Three things need your approval. Everything else is handled." },
    { time: "8:06am", text: "Review two drafts. Tap send." },
    { time: "8:08am", text: "10 minutes later, Done.", accent: true },
  ];

  return (
    <section className="pt-14 pb-28 md:pt-16 md:pb-36" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">The problem</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-14 md:mb-16 max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Your mornings shouldn&apos;t start in your inbox.
          <br />
          <span className="text-white/35">Same you, Completely different day.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-0 md:gap-0">
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
