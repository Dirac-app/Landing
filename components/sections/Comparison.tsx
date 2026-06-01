import { SectionEyebrow } from "@/components/ui/section-eyebrow";

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
    <section className="py-24 md:py-36" id="comparison">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">Comparison</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-12 md:mb-14 max-w-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Not a faster inbox.
          <br />
          <span className="text-white/35">A different job entirely.</span>
        </h2>

        <div className="overflow-x-auto -mx-6 px-6 rounded-xl border border-white/[0.06] bg-black/40 p-1 md:p-0 md:border-0 md:bg-transparent">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="text-left pb-5 pr-8 w-[22%]" />
                <th className="text-left pb-5 pr-6 w-[26%]">
                  <span className="text-sm font-medium text-white/35">Gmail</span>
                </th>
                <th className="text-left pb-5 pr-6 w-[26%]">
                  <span className="text-sm font-medium text-white/35">Superhuman</span>
                </th>
                <th className="text-left pb-5 w-[26%]">
                  <div className="inline-flex items-center gap-2">
                    <span
                      className="text-sm font-semibold text-accent"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Dirac
                    </span>
                    <span className="text-[10px] text-accent/60 accent-border-subtle rounded-full px-2 py-0.5 font-medium" style={{ ["--accent-fill" as string]: "transparent" }}>
                      you
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <td colSpan={4}>
                  <div className="h-px bg-white/8 mb-0" />
                </td>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="group">
                  <td className="py-5 pr-8 align-top border-t border-white/5">
                    <span className="text-xs font-medium text-white/30 uppercase tracking-widest">
                      {row.label}
                    </span>
                  </td>
                  <td className="py-5 pr-6 align-top border-t border-white/5">
                    <span className="text-sm text-white/35 leading-snug">{row.gmail}</span>
                  </td>
                  <td className="py-5 pr-6 align-top border-t border-white/5">
                    <span className="text-sm text-white/35 leading-snug">{row.superhuman}</span>
                  </td>
                  <td className="py-5 align-top border-t border-white/5">
                    <span className="text-sm text-white/80 font-medium leading-snug">
                      {row.dirac}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
