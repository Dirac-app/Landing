import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { buildWaitlistWelcomeEmail, getWaitlistFromAddress } from "@/lib/waitlist-email";
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
  const role = (body.role ?? "").trim();
  const frustration = (body.frustration ?? "").trim();
  const emailTypes = (body.email_types ?? "").trim();
  const heardFrom = (body.heard_from ?? "").trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }

  if (!role || !frustration || !emailTypes || !heardFrom) {
    return NextResponse.json({ error: "Please answer all questions." }, { status: 422 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { data: inserted, error: dbError } = await supabaseAdmin
    .from("waitlist")
    .insert({
      email,
      role,
      frustration,
      email_types: emailTypes,
      heard_from: heardFrom,
      confirmation_email_sent: false,
    })
    .select("id")
    .single();

  if (dbError) {
    if (dbError.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 },
      );
    }
    console.error("[waitlist] Supabase error:", dbError);
    return NextResponse.json(
      { error: "Failed to save your email. Please try again." },
      { status: 500 },
    );
  }

  let confirmationEmailSent = false;

  if (process.env.RESEND_API_KEY) {
    try {
      const { subject, html, text } = buildWaitlistWelcomeEmail();
      const { error: emailError } = await resend.emails.send({
        from: getWaitlistFromAddress(),
        to: email,
        subject,
        html,
        text,
        replyTo: "peter@dirac.app",
      });

      if (emailError) {
        console.error("[waitlist] Resend error:", emailError);
      } else {
        confirmationEmailSent = true;
      }
    } catch (emailError) {
      console.error("[waitlist] Resend error:", emailError);
    }
  } else {
    console.warn("[waitlist] RESEND_API_KEY not set — skipping welcome email.");
  }

  if (inserted?.id && confirmationEmailSent) {
    const { error: updateError } = await supabaseAdmin
      .from("waitlist")
      .update({ confirmation_email_sent: true })
      .eq("id", inserted.id);

    if (updateError) {
      console.error("[waitlist] Failed to update confirmation_email_sent:", updateError);
    }
  }

  return NextResponse.json({ success: true, confirmationEmailSent });
}
