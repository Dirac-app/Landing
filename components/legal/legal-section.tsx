type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mb-10">
      <h2
        className="text-lg font-semibold text-white mb-3"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm text-white/50 leading-relaxed">{children}</div>
    </section>
  );
}
