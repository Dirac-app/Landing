import { AttentionBadge } from "@/components/ui/attention-badge";
import { UiMockFrame } from "@/components/ui/ui-mock-frame";

const priority = [
  { subject: "John might be a interested — respond by EOD", tag: "PROSPECT", needsYou: true },
  { subject: "There's a bug in the last Deployment", tag: "URGENT" },
  { subject: "Acme Corp — needs reply", tag: "CUSTOMER" },
  { subject: "Legal — signature required on SAFE", tag: "ACTION" },
];

const filed = [
  "SaaS Weekly — this week's top reads",
  "GitHub — 14 PR reviews waiting",
  "Stripe — February statement ready",
  "LinkedIn — 12 people viewed your profile",
  "Calendly — reminder: sync with design",
];

export function WhatMatters() {
  return (
    <UiMockFrame innerClassName="p-5 md:p-6">
      <p className="text-[10px] tracking-[0.12em] mb-5 font-mono text-muted uppercase">
        38 overnight · 4 need you
      </p>

      <div className="flex flex-col gap-2 mb-5">
        {priority.map((item, i) => (
          <div
            key={item.subject}
            className="flex items-start gap-3 rounded-lg border border-border bg-canvas/50 px-3.5 py-3"
          >
            <span className="text-[10px] tabular-nums shrink-0 mt-0.5 w-4 font-mono text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium text-ink leading-snug">{item.subject}</p>
              {item.needsYou ? (
                <div className="mt-2">
                  <AttentionBadge>{item.tag}</AttentionBadge>
                </div>
              ) : (
                <span className="text-[9px] tracking-[0.12em] mt-1.5 inline-block font-mono text-muted uppercase">
                  {item.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[9px] tracking-[0.12em] shrink-0 font-mono text-muted uppercase">
          34 filed · archived
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-2 opacity-45">
        {filed.map((subject) => (
          <p key={subject} className="text-[12px] text-muted leading-snug truncate pl-7">
            {subject}
          </p>
        ))}
      </div>
    </UiMockFrame>
  );
}
