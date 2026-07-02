import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

type RowData = {
  label: string;
  gmail: string;
  superhuman: string;
  dirac: string;
};

const rows: RowData[] = [
  {
    label: "Philosophy",
    gmail: "Organize what arrives",
    superhuman: "Move through it faster",
    dirac: "Handle it before you wake up",
  },
  {
    label: "Morning routine",
    gmail: "Open inbox, start triaging",
    superhuman: "Keyboard-speed triage",
    dirac: "Read a brief. Done by 7:08am.",
  },
  {
    label: "Drafting",
    gmail: "Write from scratch",
    superhuman: "AI assist, your words",
    dirac: "Ready-to-send drafts in your voice",
  },
  {
    label: "Bulk actions",
    gmail: "Filters & labels, manual",
    superhuman: "Split inbox + shortcuts",
    dirac: "AI-grouped, one-tap resolution",
  },
  {
    label: "Your role",
    gmail: "Operator",
    superhuman: "Fast operator",
    dirac: "Decision-maker",
  },
];

export function Comparison() {
  return (
    <SectionShell id="comparison" tone="panel">
      <SectionEyebrow className="mb-6">Comparison</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-ink leading-[1.1] tracking-tight mb-12 md:mb-16 max-w-3xl">
        Not a faster inbox.
        <br />
        <span className="text-muted">
          A <span className="editorial-highlight">different job</span> entirely.
        </span>
      </h2>

      <div className="panel-card overflow-x-auto p-1 md:p-2">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="text-left pb-5 pr-8 w-[22%] p-4" />
              <th className="text-left pb-5 pr-6 w-[26%] p-4">
                <span className="text-sm font-medium text-muted">Gmail</span>
              </th>
              <th className="text-left pb-5 pr-6 w-[26%] p-4">
                <span className="text-sm font-medium text-muted">Superhuman</span>
              </th>
              <th className="text-left pb-5 w-[26%] p-4">
                <span className="font-serif text-sm font-medium text-ink">Dirac</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="py-5 pr-8 align-top border-t border-border p-4">
                  <span className="text-xs font-medium text-muted uppercase tracking-widest">
                    {row.label}
                  </span>
                </td>
                <td className="py-5 pr-6 align-top border-t border-border p-4">
                  <span className="text-sm text-muted leading-snug">{row.gmail}</span>
                </td>
                <td className="py-5 pr-6 align-top border-t border-border p-4">
                  <span className="text-sm text-muted leading-snug">{row.superhuman}</span>
                </td>
                <td className="py-5 align-top border-t border-border p-4">
                  <span className="text-sm text-ink font-medium leading-snug">{row.dirac}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
