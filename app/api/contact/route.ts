import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    // ── Server-side validation ────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    // ── Send email via Resend ──────────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "nash.santiago04@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#a3e635">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:80px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Subject</strong></td><td style="padding:8px 0">${subject}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
          <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message received! I'll be in touch soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
