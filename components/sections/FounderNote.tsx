export function FounderNote() {
  return (
    <section className="py-24 md:py-36 border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-white/30 uppercase tracking-widest font-medium mb-16 pl-1">
          Founder note
        </p>

        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start max-w-4xl">
          {/* Photo placeholder */}
          <div className="shrink-0">
            <div
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl border border-white/8 bg-white/3 flex flex-col items-center justify-center gap-2 overflow-hidden"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 bg-white/6" />
              <div className="w-16 h-2.5 rounded-full bg-white/6" />
              <p className="text-white/15 text-[9px] font-mono tracking-wide mt-1">
                photo coming soon
              </p>
            </div>
            <div className="mt-4">
              <p
                className="text-sm font-semibold text-white/70"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Peter
              </p>
              <p className="text-xs text-white/30 mt-0.5">Founder, Dirac</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <h2
              className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Built by a 15-year-old who got tired of watching founders drown in email.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              I watched the people I admired spend two to three hours a day just processing email.
              Not thinking, not building — processing. Triaging, drafting, following up. The same
              actions, repeated forever.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              I built Dirac because I believe that inbox management should be handled the same way
              a great chief of staff handles scheduling: proactively, invisibly, in your voice —
              so you only see what requires your judgment.
            </p>
            <p className="text-white/45 text-base leading-relaxed">
              This is early. The product is still being shaped. If you&apos;re the kind of person who
              wants to help define what this becomes, join the waitlist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
