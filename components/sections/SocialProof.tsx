import { SectionEyebrow } from "@/components/ui/section-eyebrow";

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
    role: "Entrepreneur | Agency owner",
    handle: "@pin-zhou",
    handleHref: "https://linkedin.com/in/pin-zhou-800529133",
  },
];

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

function TestimonialQuote({ parts }: { parts: QuotePart[] }) {
  return (
    <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">
      &ldquo;
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <strong key={index} className="font-semibold text-white/75">
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
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 flex flex-col h-full">
      <TestimonialQuote parts={item.quote} />
      <div>
        <p className="text-sm font-medium text-white/70">{item.name}</p>
        {item.handle && (
          <p className="text-xs text-white/30 mt-0.5">
            {item.handleHref ? (
              <a
                href={item.handleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-200"
              >
                {item.handle}
              </a>
            ) : (
              item.handle
            )}
          </p>
        )}
        {(item.role || item.link) && (
          <p className="text-xs text-white/30 mt-0.5">
            {item.role}
            {item.role && item.link && " at "}
            {item.link ? (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-200"
              >
                {item.link.label}
              </a>
            ) : null}
          </p>
        )}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 md:py-36 overflow-x-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6">Social proof</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-10 md:mb-12 max-w-2xl"
          style={titleFont}
        >
          Trusted by founders who live in their inbox.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
