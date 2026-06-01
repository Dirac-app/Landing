import { WaitlistForm } from "@/components/ui/waitlist-form";

export function FinalCTA() {
  return (
    <section className="py-28 md:py-40" id="waitlist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Stop processing email.
            <br />
            <span className="text-white/35">Start your day already done.</span>
          </h2>

          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-xl">
            Dirac is in early access. Spots are limited while we tune the model for each user.
            Join the waitlist and we&apos;ll reach out directly.
          </p>

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
