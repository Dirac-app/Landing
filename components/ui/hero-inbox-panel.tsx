import { AttentionBadge } from "@/components/ui/attention-badge";
import { UiMockFrame } from "@/components/ui/ui-mock-frame";

type InboxRow = {
  from: string;
  subject: string;
  time: string;
  needsYou?: boolean;
};

const rows: InboxRow[] = [
  {
    from: "Johnny Porkens",
    subject: "Sequoia term sheet — respond by EOD",
    time: "2h",
    needsYou: true,
  },
  {
    from: "Stripe",
    subject: "Your February payout is on its way",
    time: "5h",
  },
  {
    from: "Sarah Chen",
    subject: "Re: Partnership intro",
    time: "Yesterday",
  },
];

export function HeroInboxPanel() {
  return (
    <UiMockFrame innerClassName="p-4 md:p-5">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3 mb-1">
        <h2 className="text-sm font-semibold text-ink">Inbox</h2>
        <span className="text-xs text-muted shrink-0">12 handled overnight</span>
      </div>

      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li key={row.subject} className="flex items-start gap-3 py-3 first:pt-2 last:pb-1">
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                row.needsYou ? "bg-accent" : "bg-border"
              }`}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <p className="truncate text-sm font-medium text-ink">{row.from}</p>
                <span className="shrink-0 text-xs text-muted tabular-nums">{row.time}</span>
              </div>
              <p className="truncate text-sm text-muted">{row.subject}</p>
              {row.needsYou ? (
                <div className="mt-1.5">
                  <AttentionBadge>Needs you</AttentionBadge>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </UiMockFrame>
  );
}
