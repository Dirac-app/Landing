import { Sparkles } from "lucide-react";

const body = "var(--font-inter), ui-sans-serif, sans-serif";
const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";

function CardConnector() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-px h-2.5 bg-white/[0.08]" />
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="text-white/20"
        >
          <path
            d="M1 1.5L5 4.5L9 1.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function VoiceLearning() {
  return (
    <div className="w-full max-w-[440px] mx-auto md:mx-0" style={{ fontFamily: body }}>
      <div className="flex flex-col gap-4">
        {/* Generic AI — recedes */}
        <div
          className="rounded-xl border p-4"
          style={{
            background: "#0F0E0C",
            borderColor: "rgba(255,255,255,0.06)",
            opacity: 0.7,
          }}
        >
          <p
            className="text-[10px] tracking-[0.14em] mb-3"
            style={{ fontFamily: mono, color: "#6B6862" }}
          >
            GENERIC AI
          </p>
          <p
            className="text-[13px] leading-relaxed italic"
            style={{ color: "#7A7770" }}
          >
            Hi Roelof, 
            I hope this email finds you well - wanted to confirm that we will be
            signing the documents by end of day. Additionally, I would be available for a call on
            Friday at 2pm. Please let me know if you have any questions.

            Yours sincerely,
            Avi
          </p>
        </div>

        <CardConnector />

        {/* Your voice — wins */}
        <div
          className="rounded-xl p-4 accent-border-default accent-shadow-md"
          style={{ ["--accent-fill" as string]: "#0F0E0C" }}
        >
          <div className="flex items-center gap-1.5 mb-3">
            <Sparkles
              className="h-3 w-3 shrink-0 text-accent"
              strokeWidth={2}
            />
            <p
              className="text-[10px] tracking-[0.14em] text-accent"
              style={{ fontFamily: mono }}
            >
              YOUR VOICE · DRAFTED
            </p>
          </div>
          <p className="text-[13px] leading-relaxed" style={{ color: "#E8E5DD" }}>
            Roelof,
            <br></br>
            YES, will get the signed copy over before EOD. Friday 2pm works for me,
            I&apos;ll send a calendar invite.
            <br></br><br></br>
            Looking forward to it :),
            <br></br>
            Avi
          </p>
        </div>
      </div>
    </div>
  );
}
