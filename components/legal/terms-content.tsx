import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalSection } from "@/components/legal/legal-section";

const LAST_UPDATED = "June 1, 2026";

export function TermsContent() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p className="text-sm text-white/50 leading-relaxed mb-10">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of Dirac, an
        AI-native email client operated by Nerodyn, including dirac.app and app.dirac.app (the
        &quot;Service&quot;). By using Dirac, you agree to these Terms.
      </p>

      <LegalSection title="Eligibility">
        <p>
          You must be at least 18 years old and able to form a binding contract to use the Service.
          You represent that the information you provide is accurate and that you have authority to
          connect any email accounts you link to Dirac.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and security">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activity under your account. Notify us promptly at{" "}
          <a href="mailto:peter@dirac.app" className="text-white/70 hover:text-white transition-colors">
            peter@dirac.app
          </a>{" "}
          if you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions and trials">
        <p>
          Paid plans (such as Dirac Pro) are billed monthly or annually as selected at checkout.
          Free trials and promotional offers are subject to the terms presented at signup. Fees are
          non-refundable except where required by law or explicitly stated otherwise.
        </p>
        <p>
          You may cancel your subscription through your account settings. Cancellation takes effect
          at the end of the current billing period unless otherwise stated.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Use the Service for unlawful, harmful, or abusive purposes</li>
          <li>Attempt to access accounts or data you do not own or have permission to use</li>
          <li>Reverse engineer, scrape, or interfere with the Service or its infrastructure</li>
          <li>Circumvent usage limits, security measures, or billing systems</li>
          <li>Upload malware or use Dirac to send spam or unsolicited bulk email</li>
        </ul>
      </LegalSection>

      <LegalSection title="AI-generated content">
        <p>
          Dirac uses AI to summarize email, suggest priorities, and draft replies. AI output may be
          inaccurate or incomplete. You are solely responsible for reviewing and sending any
          message before it leaves your inbox. We do not guarantee that drafts match your intent or
          comply with professional, legal, or regulatory obligations.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          The Service integrates with third-party providers (such as Google Gmail and Microsoft
          Outlook). Your use of those services is governed by their terms and policies. We are not
          responsible for third-party services or outages outside our control.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Dirac, including its software, design, and branding, is owned by Nerodyn and protected by
          intellectual property laws. We grant you a limited, non-exclusive, non-transferable license
          to use the Service for your internal business purposes in accordance with these Terms.
        </p>
        <p>
          You retain ownership of your email content. You grant us a license to process your content
          solely to provide and improve the Service as described in our Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of warranties">
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
          OR THAT AI OUTPUT WILL BE ACCURATE.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NERODYN AND ITS AFFILIATES WILL NOT BE LIABLE FOR
          ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST
          PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR
          ANY CLAIM RELATING TO THE SERVICE IS LIMITED TO THE AMOUNT YOU PAID US IN THE TWELVE (12)
          MONTHS BEFORE THE CLAIM, OR ONE HUNDRED U.S. DOLLARS ($100), WHICHEVER IS GREATER.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using the Service at any time. We may suspend or terminate your access if you
          violate these Terms, fail to pay applicable fees, or if we discontinue the Service. Upon
          termination, your right to use Dirac ends; provisions that by nature should survive will
          remain in effect.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may modify these Terms from time to time. Material changes will be posted on this page
          with an updated date. Your continued use after changes become effective constitutes
          acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of the State of Delaware, United States, without
          regard to conflict-of-law principles, except where mandatory local law applies.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms? Contact Nerodyn at{" "}
          <a href="mailto:peter@dirac.app" className="text-white/70 hover:text-white transition-colors">
            peter@dirac.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
