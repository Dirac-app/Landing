const mono = "var(--font-geist-mono), ui-monospace, monospace";
const title = "var(--font-space-grotesk), sans-serif";

const priority = [
  { subject: "Sequoia term sheet — respond by EOD", tag: "INVESTOR" },
  { subject: "Board prep — call with Johnny Friday", tag: "URGENT" },
  { subject: "Acme Corp churn risk — needs reply", tag: "CUSTOMER" },
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
    <div className="w-full max-w-[440px] mx-auto md:mx-0">
      <div
        className="rounded-xl border border-white/[0.06] p-[18px]"
        style={{ background: "#181714" }}
      >
        <p
          className="text-[10px] tracking-[0.12em] mb-4"
          style={{ fontFamily: mono, color: "#6B6862" }}
        >
          38 OVERNIGHT · 4 NEED YOU
        </p>

        {/* Priority — surfaced */}
        <div className="flex flex-col gap-2 mb-4">
          {priority.map((item, i) => (
            <div
              key={item.subject}
              className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 ${
                i === 0 ? "accent-border-subtle" : "border border-white/[0.06]"
              }`}
              style={
                i === 0
                  ? { ["--accent-fill" as string]: "#181714" }
                  : { background: "rgba(255,255,255,0.02)" }
              }
            >
              <span
                className="text-[10px] tabular-nums shrink-0 mt-0.5 w-4 text-accent"
                style={{ fontFamily: mono }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className="text-[13px] font-medium text-[#FAFAF7] leading-snug tracking-tight"
                  style={{ fontFamily: title }}
                >
                  {item.subject}
                </p>
                <span
                  className="text-[9px] tracking-[0.12em] mt-1 inline-block text-accent"
                  style={{ fontFamily: mono }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider — filed / archived */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span
            className="text-[9px] tracking-[0.12em] shrink-0"
            style={{ fontFamily: mono, color: "#6B6862" }}
          >
            34 FILED · ARCHIVED
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Background noise — recedes */}
        <div className="flex flex-col gap-1.5 opacity-40">
          {filed.map((subject) => (
            <p
              key={subject}
              className="text-[12px] text-[#7A7770] leading-snug truncate pl-[26px]"
              style={{ fontFamily: title }}
            >
              {subject}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
