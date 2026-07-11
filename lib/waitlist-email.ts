export function getWaitlistFromAddress() {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (from) return from;
  return "Peter <peter@dirac.app>";
}

export function buildWaitlistWelcomeEmail() {
  const subject = "You're on the list";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;color:#111111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:56px 24px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:440px;">
          <tr>
            <td style="padding:0 0 28px;border-bottom:1px solid #e8e8e6;">
              <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#6b6b6b;">Dirac</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0 0;">
              <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:500;letter-spacing:-0.02em;color:#111111;font-family:Georgia,'Times New Roman',serif;">
                You&rsquo;re on the list.
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 0 0;">
              <p style="margin:0;font-size:16px;line-height:1.65;color:#6b6b6b;">
                I&rsquo;ll email you when your spot opens.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 0 0;">
              <p style="margin:0;font-size:15px;line-height:1.5;color:#111111;">
                Peter
              </p>
              <p style="margin:4px 0 0;font-size:13px;line-height:1.4;color:#6b6b6b;">
                Founder, Dirac
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = [
    "You're on the list.",
    "",
    "I'll email you when your spot opens.",
    "",
    "Peter",
    "Founder, Dirac",
  ].join("\n");

  return { subject, html, text };
}
