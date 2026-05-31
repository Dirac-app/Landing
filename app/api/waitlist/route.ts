import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { error: dbError } = await supabaseAdmin.from("waitlist").insert({
    email,
    role: body.role ?? null,
    inbox_role: body.inbox_role ?? null,
    frustration: body.frustration ?? null,
    email_types: body.email_types ?? null,
    cost_of_miss: body.cost_of_miss ?? null,
    messaging_apps: body.messaging_apps ?? null,
  });

  if (dbError) {
    if (dbError.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }
    console.error("[waitlist] Supabase error:", dbError);
    return NextResponse.json(
      { error: "Failed to save your email. Please try again." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "Dirac <peter@dirac.app>",
      to: email,
      subject: "You're on the Dirac waitlist.",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Dirac waitlist</title>
</head>
<body style="margin:0;padding:0;background:#000;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 24px;">
    <tr>
      <td style="max-width:520px;margin:0 auto;display:block;">
        <p style="font-size:13px;color:#666;margin:0 0 32px;">Dirac</p>
        <h1 style="font-size:24px;font-weight:600;margin:0 0 16px;line-height:1.3;color:#fff;">
          You're on the list.
        </h1>
        <p style="font-size:15px;color:#888;line-height:1.7;margin:0 0 24px;">
          Thanks for joining the Dirac waitlist. We're onboarding people in small batches while
          we tune the AI to each person's voice — we'll reach out directly when your spot is ready.
        </p>
        <p style="font-size:15px;color:#888;line-height:1.7;margin:0 0 40px;">
          In the meantime, if you have questions or want to tell me about your inbox situation,
          reply to this email.
        </p>
        <p style="font-size:13px;color:#555;margin:0;">
          — Peter<br />
          <span style="color:#444;">Founder, Dirac</span>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    });
  } catch (emailError) {
    console.error("[waitlist] Resend error:", emailError);
  }

  return NextResponse.json({ success: true });
}
