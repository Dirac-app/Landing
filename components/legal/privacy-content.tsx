import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalSection } from "@/components/legal/legal-section";

const LAST_UPDATED = "June 1, 2026";

export function PrivacyContent() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p className="text-sm text-white/50 leading-relaxed mb-10">
        This Privacy Policy describes how Nerodyn (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        collects, uses, and shares information when you use Dirac, our AI-native email client,
        including dirac.app and app.dirac.app (the &quot;Service&quot;).
      </p>

      <LegalSection title="Information we collect">
        <p>
          <strong className="text-white/70">Account information.</strong> When you sign up, we
          collect your name, email address, and authentication details needed to create and
          secure your account.
        </p>
        <p>
          <strong className="text-white/70">Email data.</strong> If you connect Gmail or Outlook,
          we access email metadata and content necessary to provide the Service — including
          messages, threads, labels, and sent mail used to learn your writing voice and generate
          summaries, priorities, and drafts.
        </p>
        <p>
          <strong className="text-white/70">Usage data.</strong> We collect information about how
          you interact with the Service, such as features used, session activity, and technical
          logs (IP address, browser type, device information) to operate and improve Dirac.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Provide, maintain, and improve the Service</li>
          <li>Generate morning briefs, summaries, priorities, and AI-assisted drafts</li>
          <li>Learn and apply your communication style when drafting replies</li>
          <li>Process billing, trials, and account support</li>
          <li>Detect abuse, fraud, and security issues</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="AI processing">
        <p>
          Dirac uses artificial intelligence to analyze your email. Message content may be
          processed by our systems and third-party AI providers under agreements that restrict
          use of your data to providing the Service. We do not sell your email content.
        </p>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>We may share information with:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <strong className="text-white/70">Service providers</strong> — hosting, analytics,
            payment processing, email connectivity (e.g. Google, Microsoft), and AI infrastructure
            partners that help us operate Dirac
          </li>
          <li>
            <strong className="text-white/70">Legal requirements</strong> — when required by law,
            regulation, or to protect rights and safety
          </li>
          <li>
            <strong className="text-white/70">Business transfers</strong> — in connection with a
            merger, acquisition, or sale of assets, with notice where required
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain your information for as long as your account is active or as needed to provide
          the Service. You may request deletion of your account and associated data by contacting
          us. Some information may be retained where required for legal, security, or backup
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We implement technical and organizational measures designed to protect your information.
          No method of transmission or storage is completely secure; we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or export
          your personal data, or to object to or restrict certain processing. To exercise these
          rights, contact us at{" "}
          <a href="mailto:peter@dirac.app" className="text-white/70 hover:text-white transition-colors">
            peter@dirac.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. We will post the revised policy on
          this page and update the &quot;Last updated&quot; date. Continued use of the Service after
          changes constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this Privacy Policy? Contact Nerodyn at{" "}
          <a href="mailto:peter@dirac.app" className="text-white/70 hover:text-white transition-colors">
            peter@dirac.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
