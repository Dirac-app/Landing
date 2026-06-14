import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const featured = {
  quote:
    "I used to lose my first hour every morning to email. Now I open Dirac at 7am, send two drafts, and I'm in my first meeting actually prepared.",
  name: "Sarah Chen",
  role: "CEO, Series A startup",
};

const testimonials = [
  {
    quote:
      "The morning brief alone is worth it. I know exactly what needs me before I've had coffee.",
    name: "Marcus Webb",
    role: "COO, B2B SaaS",
  },
  {
    quote:
      "Investor replies used to take 20 minutes each. Dirac drafts them in my voice — I just review and send.",
    name: "James Okonkwo",
    role: "Founder, fintech",
  },
  {
    quote:
      "I stopped missing threads that matter. Dirac surfaces the ones I'd have buried under noise.",
    name: "Elena Vasquez",
    role: "Head of BD",
  },
];

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

export function SocialProof() {
  return (
    <section className="py-24 md:py-36" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <SectionEyebrow className="mb-6 text-center md:text-left">Social proof</SectionEyebrow>

        <div className="max-w-3xl mx-auto md:mx-0 mb-16 md:mb-20">
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug tracking-tight mb-8"
            style={titleFont}
          >
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <footer className="flex flex-col gap-0.5">
            <cite className="not-italic text-sm font-medium text-white/70">{featured.name}</cite>
            <span className="text-sm text-white/35">{featured.role}</span>
          </footer>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col"
            >
              <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-white/70">{item.name}</p>
                <p className="text-xs text-white/30 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
