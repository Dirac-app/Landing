import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

type QuotePart = string | { bold: string };

type Testimonial = {
  quote: QuotePart[];
  name: string;
  handle?: string;
  handleHref?: string;
  role?: string;
  link?: { label: string; href: string };
};

const testimonials: Testimonial[] = [
  {
    quote: [
      "There's no shortage of email tools out there. ",
      { bold: "I stick with Dirac because of trust" },
      ". My inbox is personal. If someone starts shuffling things around and I can't find stuff, that's worse than the mess I started with. Before this I would've just kept doing it all myself.",
    ],
    name: "Silvia Jiang",
    handle: "@silviakyou",
  },
  {
    quote: [
      "I love Dirac's take that ",
      { bold: "email shouldn't be the founder's job" },
      ". I get a morning brief, tap send on what looks right, and I'm out. That's the whole thing. No inbox first thing, no triage spiral [before] coffee.",
    ],
    name: "Artin Amraei",
    role: "Builder | Agency Owner",
    link: { label: "Nerodyn", href: "https://nerodyn.com" },
  },
  {
    quote: [
      "I used Superhuman for two years. Fast inbox, still my problem every morning. Gmail organizes what arrives. Dirac handles it before I wake up. ",
      { bold: "Not a faster inbox, a smaller one" },
      ". I switched and haven't looked back.",
    ],
    name: "Pin Zhou",
    role: "Entrepreneur | Founder of Beebee Ai",
    handle: "@pin-zhou",
    handleHref: "https://linkedin.com/in/pin-zhou-800529133",
  },
];

function TestimonialQuote({ parts }: { parts: QuotePart[] }) {
  return (
    <p className="text-sm text-muted leading-relaxed flex-1 mb-8">
      &ldquo;
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <strong key={index} className="font-semibold text-ink">
            {part.bold}
          </strong>
        ),
      )}
      &rdquo;
    </p>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="panel-card p-7 md:p-8 flex flex-col h-full">
      <TestimonialQuote parts={item.quote} />
      <div className="mt-auto pt-2 border-t border-border">
        <p className="text-sm font-medium text-ink">{item.name}</p>
        {item.handle && (
          <p className="text-xs text-muted mt-1">
            {item.handleHref ? (
              <a
                href={item.handleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors duration-200"
              >
                {item.handle}
              </a>
            ) : (
              item.handle
            )}
          </p>
        )}
        {(item.role || item.link) && (
          <p className="text-xs text-muted mt-1">
            {item.role}
            {item.role && item.link && " at "}
            {item.link ? (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors duration-200"
              >
                {item.link.label}
              </a>
            ) : null}
          </p>
        )}
      </div>
    </article>
  );
}

export function SocialProof() {
  return (
    <SectionShell id="testimonials" tone="panel">
      <SectionEyebrow className="mb-6">Social proof</SectionEyebrow>

      <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink leading-[1.1] tracking-tight mb-12 md:mb-16 max-w-2xl">
        Trusted by founders who live in their{" "}
        <span className="editorial-highlight">inbox</span>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
