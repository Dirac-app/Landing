type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-lg font-medium text-ink mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm text-muted leading-relaxed">{children}</div>
    </section>
  );
}
