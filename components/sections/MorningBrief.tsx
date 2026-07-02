import { MousePointer2, Send } from "lucide-react";

import { AttentionBadge } from "@/components/ui/attention-badge";
import { UiMockFrame } from "@/components/ui/ui-mock-frame";

export function MorningBrief() {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <UiMockFrame innerClassName="p-5 md:p-6">
        <div className="mb-6">
          <h3 className="font-serif text-[22px] font-medium text-ink tracking-tight mb-1.5">
            Morning Brief
          </h3>
          <p className="text-[11px] text-muted tracking-widest font-mono uppercase">
            7:00 AM · 38 emails processed
          </p>
        </div>

        <div className="rounded-xl border border-border bg-canvas/50 p-4 mb-4">
          <div className="mb-2.5">
            <AttentionBadge className="tracking-widest uppercase text-[10px]">
              Needs reply
            </AttentionBadge>
          </div>

          <p className="text-[15px] font-medium text-ink mb-1 tracking-tight">
            Sequoia term sheet — respond by EOD
          </p>
          <p className="text-[10px] text-muted tracking-widest font-mono uppercase mb-3">
            Johnny Porkens · 2 hours ago
          </p>
          <div className="h-px bg-border mb-3" />

          <p className="text-[13px] text-muted leading-relaxed mb-4">
            Johnny confirmed terms and wants a signed copy by end of day. He&apos;s also asking if
            you can hop on a call Friday to discuss the board seat.
          </p>

          <div className="rounded-lg border border-border bg-panel p-3.5 mb-3.5">
            <div className="flex items-center gap-2 mb-2">
              <Send className="h-3 w-3 text-muted shrink-0" strokeWidth={2} />
              <span className="text-[9px] text-muted tracking-[0.14em] font-medium font-mono uppercase">
                Drafted reply
              </span>
            </div>
            <p className="text-[12.5px] text-ink/90 leading-relaxed">
              Johnny — yes, will get the signed copy over before EOD. Friday 2pm works for me,
              I&apos;ll send a calendar invite. Looking forward to it.
            </p>
          </div>

          <div className="relative w-fit opacity-75 pointer-events-none select-none" aria-hidden>
            <MousePointer2
              className="absolute -top-4 right-0 h-10 w-10 text-ink/40 pointer-events-none z-10"
              fill="currentColor"
              strokeWidth={1.5}
            />
            <button
              type="button"
              tabIndex={-1}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white px-[18px] py-2.5 rounded-lg btn-primary-cta cursor-default"
            >
              <Send className="h-3.5 w-3.5" strokeWidth={2} />
              Send
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-canvas/30 p-4 mb-4 opacity-60">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[10px] tracking-widest font-mono text-muted uppercase">
              Ready · drafted 6:47 am
            </span>
          </div>
          <p className="text-sm font-medium text-ink mb-1">
            Status update → engineering leads
          </p>
          <p className="text-xs text-muted leading-snug">
            Friday&apos;s progress recap drafted from your commits and standups. Ready for approval.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-canvas/20 p-4 opacity-40">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-[70px] h-3.5 bg-border rounded" />
            <div className="w-[110px] h-2.5 bg-border/70 rounded-sm" />
          </div>
          <div className="h-3 w-[78%] bg-border rounded mb-2" />
          <div className="w-[92%] h-2 bg-border/70 rounded-sm mb-1" />
          <div className="w-[65%] h-2 bg-border/70 rounded-sm" />
        </div>
      </UiMockFrame>
    </div>
  );
}
