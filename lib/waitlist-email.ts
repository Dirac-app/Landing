export function getWaitlistFromAddress() {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (from) return from;
  return "Peter from Dirac <peter@dirac.app>";
}

export function buildWaitlistWelcomeEmail() {
  const subject = "You're on the Dirac waitlist";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#faf8f5;color:#1f1b18;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f5;padding:48px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid #ece7e1;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:36px 32px 8px;">
              <p style="margin:0;font-size:13px;letter-spacing:0.02em;color:#6b635c;">Dirac</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 0;">
              <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:500;color:#1f1b18;font-family:Georgia,'Times New Roman',serif;">
                You&apos;re on the list.
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 0;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#1f1b18;">
                Thanks for joining the Dirac waitlist — I really appreciate it.
              </p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#6b635c;">
                We&apos;re onboarding in small batches while we tune the product to how
                founders actually work in their inbox. When your spot opens up, I&apos;ll
                reach out personally.
              </p>
              <p style="margin:0;font-size:16px;line-height:1.7;color:#6b635c;">
                If anything about your inbox situation would help us prioritize you,
                just reply to this email. I read every one.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 36px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#1f1b18;">
                Peter <span style="color:#6b635c;">|</span> Founder of Dirac
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#9a928b;">
          Dirac &middot; The email agent built around decisions
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = [
    "You're on the list.",
    "",
    "Thanks for joining the Dirac waitlist — I really appreciate it.",
    "",
    "We're onboarding in small batches while we tune the product to how founders actually work in their inbox. When your spot opens up, I'll reach out personally.",
    "",
    "If anything about your inbox situation would help us prioritize you, just reply to this email. I read every one.",
    "",
    "Peter | Founder of Dirac",
  ].join("\n");

  return { subject, html, text };
}
