import { UiMockFrame } from "@/components/ui/ui-mock-frame";

export function VoiceLearning() {
  return (
    <UiMockFrame innerClassName="p-5 md:p-6 flex flex-col gap-4">
      <div className="rounded-lg border border-border bg-canvas/50 p-4 opacity-75">
        <p className="text-[10px] tracking-[0.14em] mb-3 font-mono text-muted uppercase">
          Generic AI
        </p>
        <p className="text-[13px] leading-relaxed italic text-muted">
          Hi Roelof, I hope this email finds you well - wanted to confirm that we will be
          signing the documents by end of day. Additionally, I would be available for a call on
          Friday at 2pm. Please let me know if you have any questions.
          <br />
          <br />
          Yours sincerely,
          <br />
          Avi
        </p>
      </div>

      <div className="flex justify-center py-0.5" aria-hidden>
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-px h-2.5 bg-border" />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-muted">
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

      <div className="rounded-lg border border-border bg-canvas/30 p-4">
        <p className="text-[10px] tracking-[0.14em] mb-3 font-mono text-muted uppercase">
          Your voice · drafted
        </p>
        <p className="text-[13px] leading-relaxed text-ink">
          Roelof,
          <br />
          YES, will get the signed copy over before EOD. Friday 2pm works for me,
          I&apos;ll send a calendar invite.
          <span
            className="inline-block w-px h-[14px] ml-0.5 align-middle bg-ink/30 animate-pulse"
            aria-hidden
          />
          <br />
          <br />
          Looking forward to it :),
          <br />
          Avi
        </p>
      </div>
    </UiMockFrame>
  );
}
