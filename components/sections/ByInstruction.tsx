import { MousePointer2, Star } from "lucide-react";

const mono = "var(--font-geist-mono), ui-monospace, monospace";
const title = "var(--font-space-grotesk), sans-serif";

const threads = [
  { sender: "Sequoia Capital", subject: "Term sheet follow-up" },
  { sender: "Andreessen Horowitz", subject: "Board meeting prep" },
  { sender: "Greylock Partners", subject: "Intro from Sarah Chen" },
  { sender: "Benchmark", subject: "Q4 portfolio update" },
  { sender: "Accel", subject: "Seed extension terms" },
];

export function ByInstruction() {
  return (
    <div className="w-full max-w-[440px] mx-auto md:mx-0">
      <div
        className="rounded-xl border border-white/[0.06] p-[18px] flex flex-col gap-4"
        style={{ background: "#181714" }}
      >
        {/* Instruction input */}
        <div
          className="rounded-lg px-3.5 py-2.5 accent-border-strong accent-shadow-focus"
          style={{ ["--accent-fill" as string]: "#0F0E0C" }}
        >
          <p className="text-[13px] text-[#E8E5DD] leading-snug">
            Star anything from investors this week
            <span
              className="inline-block w-px h-[14px] ml-0.5 align-middle bg-accent animate-pulse"
              aria-hidden
            />
          </p>
        </div>

        {/* Plan preview */}
        <div
          className="rounded-[10px] p-3.5 accent-border-subtle"
          style={{ ["--accent-fill" as string]: "#181714" }}
        >
          <p
            className="text-[10px] tracking-[0.12em] mb-3 text-accent"
            style={{ fontFamily: mono }}
          >
            FOUND 5 THREADS · WILL MARK AS STARRED
          </p>

          <div className="flex flex-col gap-2">
            {threads.map((thread) => (
              <div key={thread.sender} className="flex items-start gap-2 min-w-0">
                <Star
                  className="h-3 w-3 shrink-0 mt-0.5 text-accent"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <div className="min-w-0 flex-1">
                  <span
                    className="text-[12px] font-medium text-[#FAFAF7] tracking-tight"
                    style={{ fontFamily: title }}
                  >
                    {thread.sender}
                  </span>
                  <span className="text-[12px] text-[#6B6862]"> · </span>
                  <span className="text-[12px] text-[#8A877F]">{thread.subject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply */}
        <div className="relative">
          <MousePointer2
            className="absolute -top-5 left-[58%] h-12 w-12 text-white opacity-80 drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] pointer-events-none z-10"
            fill="white"
            strokeWidth={1.5}
            aria-hidden
          />
          <button
            type="button"
            className="inline-flex w-full items-center justify-center text-[13px] font-semibold text-black py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600"
          >
            Apply (5)
          </button>
        </div>
      </div>
    </div>
  );
}
