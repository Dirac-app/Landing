import { Send } from "lucide-react";

const mono = "var(--font-geist-mono), ui-monospace, monospace";
const title = "var(--font-space-grotesk), sans-serif";

const panelMask = {
  maskImage:
    "linear-gradient(to bottom, #000000 0%, #000000 72%, rgba(0,0,0,0.9) 84%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, #000000 0%, #000000 72%, rgba(0,0,0,0.9) 84%, transparent 100%)",
};

export function MorningBrief() {
  return (
    <div className="relative z-[1] w-full max-w-[500px] mx-auto">
      <div
        className="relative rounded-t-2xl border border-white/[0.06] bg-black px-7 pt-7 pb-6"
        style={panelMask}
      >
        <div className="mb-7">
          <div
            className="text-[22px] font-medium text-[#FAFAF7] tracking-tight mb-1.5"
            style={{ fontFamily: title }}
          >
            Morning Brief
          </div>
          <div className="text-[11px] text-[#6B6862] tracking-widest" style={{ fontFamily: mono }}>
            7:00 AM &nbsp;·&nbsp; 38 EMAILS PROCESSED
          </div>
        </div>

        <div className="relative">
          {/* Dashed selection frame */}
          <div className="absolute -inset-2 pointer-events-none" aria-hidden>
            <div
              className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-dashed rounded-tl-xl"
              style={{ borderColor: "rgba(251,146,60,0.45)" }}
            />
            <div
              className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-dashed rounded-tr-xl"
              style={{ borderColor: "rgba(251,146,60,0.45)" }}
            />
            <div
              className="absolute top-0 left-2.5 right-2.5 border-t-2 border-dashed"
              style={{ borderColor: "rgba(251,146,60,0.45)" }}
            />
            <div
              className="absolute top-0 bottom-0 left-0 border-l-2 border-dashed"
              style={{
                borderColor: "rgba(251,146,60,0.45)",
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 65%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 65%, transparent 100%)",
              }}
            />
            <div
              className="absolute top-0 bottom-0 right-0 border-r-2 border-dashed"
              style={{
                borderColor: "rgba(251,146,60,0.45)",
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 65%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 65%, transparent 100%)",
              }}
            />
          </div>

          <div
            className="rounded-xl border border-white/[0.06] p-[18px] mb-3.5"
            style={{ background: "#181714" }}
          >
            <div className="mb-2.5">
              <span
                className="inline-block text-[10px] tracking-widest px-2 py-1 rounded"
                style={{
                  fontFamily: mono,
                  background: "rgba(96,165,250,0.12)",
                  color: "#93C5FD",
                }}
              >
                NEEDS REPLY
              </span>
            </div>

            <div
              className="text-[15px] font-medium text-[#FAFAF7] mb-1 tracking-tight"
              style={{ fontFamily: title }}
            >
              Sequoia term sheet — respond by EOD
            </div>
            <div className="text-[10px] text-[#6B6862] tracking-widest mb-3" style={{ fontFamily: mono }}>
              JOHNNY PORKENS &nbsp;·&nbsp; 2 HOURS AGO
            </div>
            <div className="h-px bg-white/[0.05] mb-3" />

            <p className="text-[13px] text-[#B8B5AD] leading-relaxed mb-4">
              Johnny confirmed terms and wants a signed copy by end of day. He&apos;s also asking if
              you can hop on a call Friday to discuss the board seat.
            </p>

            <div
              className="rounded-[10px] border p-3.5 mb-3.5"
              style={{
                background: "rgba(251,146,60,0.04)",
                borderColor: "rgba(251,146,60,0.35)",
                boxShadow: "0 0 24px rgba(251,146,60,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-3 w-3 text-orange-400 shrink-0" strokeWidth={2} />
                <span
                  className="text-[9px] text-orange-400 tracking-[0.14em] font-medium"
                  style={{ fontFamily: mono }}
                >
                  DRAFTED REPLY
                </span>
              </div>
              <p className="text-[12.5px] text-[#E8E5DD] leading-relaxed">
                Johnny — yes, will get the signed copy over before EOD. Friday 2pm works for me,
                I&apos;ll send a calendar invite. Looking forward to it.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black px-[18px] py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600"
            >
              <Send className="h-3.5 w-3.5" strokeWidth={2} />
              Send
            </button>
          </div>

          <FadedCard blur="1.2px" opacity={0.95}>
            <div className="flex items-center gap-2.5 mb-2">
              <span
                className="text-[10px] tracking-widest px-2 py-0.5 rounded"
                style={{
                  fontFamily: mono,
                  background: "rgba(115,160,90,0.14)",
                  color: "#93C26E",
                }}
              >
                READY
              </span>
              <span className="text-[10px] text-[#6B6862] tracking-widest" style={{ fontFamily: mono }}>
                DRAFTED 6:47 AM
              </span>
            </div>
            <div className="text-sm font-medium text-[#FAFAF7] mb-1" style={{ fontFamily: title }}>
              Status update → engineering leads
            </div>
            <p className="text-xs text-[#8A877F] leading-snug">
              Friday&apos;s progress recap drafted from your commits and standups. Ready for approval.
            </p>
          </FadedCard>

          <FadedCard blur="1.55px" opacity={1} className="!mb-0">
            <SkeletonLines />
          </FadedCard>
        </div>
      </div>
    </div>
  );
}

function SkeletonLines() {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-[70px] h-3.5 bg-white/[0.08] rounded" />
        <div className="w-[110px] h-2.5 bg-white/[0.05] rounded-sm" />
      </div>
      <div className="h-3 w-[78%] bg-white/[0.09] rounded mb-2" />
      <div className="w-[92%] h-2 bg-white/[0.05] rounded-sm mb-1" />
      <div className="w-[65%] h-2 bg-white/[0.05] rounded-sm" />
    </div>
  );
}

function FadedCard({
  children,
  blur,
  opacity,
  className = "",
}: {
  children: React.ReactNode;
  blur: string;
  opacity: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.06] p-3.5 mb-3.5 ${className}`}
      style={{
        background: "#181714",
        filter: `blur(${blur})`,
        opacity,
      }}
    >
      {children}
    </div>
  );
}
