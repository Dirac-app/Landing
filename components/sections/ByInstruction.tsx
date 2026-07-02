import { MousePointer2, Star } from "lucide-react";

import { UiMockFrame } from "@/components/ui/ui-mock-frame";

const threads = [
  { sender: "Sequoia Capital", subject: "Term sheet follow-up" },
  { sender: "Andreessen Horowitz", subject: "Board meeting prep" },
  { sender: "Greylock Partners", subject: "Intro from Sarah Chen" },
  { sender: "Benchmark", subject: "Q4 portfolio update" },
  { sender: "Accel", subject: "Seed extension terms" },
];

export function ByInstruction() {
  return (
    <UiMockFrame innerClassName="p-5 md:p-6 flex flex-col gap-4">
      <div className="rounded-lg border border-border bg-canvas/50 px-3.5 py-3">
        <p className="text-[13px] text-ink leading-snug">
          Star anything from investors this week
          <span
            className="inline-block w-px h-[14px] ml-0.5 align-middle bg-ink/30 animate-pulse"
            aria-hidden
          />
        </p>
      </div>

      <div className="rounded-lg border border-border bg-canvas/30 p-4">
        <p className="text-[10px] tracking-[0.12em] mb-3 font-mono text-muted uppercase">
          Found 5 threads · will mark as starred
        </p>

        <div className="flex flex-col gap-2.5">
          {threads.map((thread) => (
            <div key={thread.sender} className="flex items-start gap-2 min-w-0">
              <Star
                className="h-3 w-3 shrink-0 mt-0.5 text-muted"
                fill="currentColor"
                strokeWidth={0}
              />
              <div className="min-w-0 flex-1">
                <span className="text-[12px] font-medium text-ink">{thread.sender}</span>
                <span className="text-[12px] text-muted"> · </span>
                <span className="text-[12px] text-muted">{thread.subject}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative opacity-75 pointer-events-none select-none" aria-hidden>
        <MousePointer2
          className="absolute -top-4 right-2 h-10 w-10 text-ink/40 pointer-events-none z-10"
          fill="currentColor"
          strokeWidth={1.5}
        />
        <button
          type="button"
          tabIndex={-1}
          className="inline-flex w-full items-center justify-center text-[13px] font-semibold text-white py-2.5 rounded-lg btn-primary-cta cursor-default"
        >
          Apply (5)
        </button>
      </div>
    </UiMockFrame>
  );
}
