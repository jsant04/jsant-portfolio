import { NextRequest, NextResponse } from "next/server";

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

    // ── Send email (stub — plug in Resend / SendGrid / Nodemailer) ─
    // Example with Resend:
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Portfolio <noreply@jsant.dev>",
    //     to: "hello@jsant.dev",
    //     subject: `[Portfolio] ${subject}`,
    //     html: `<p><strong>${name}</strong> (${email}) wrote:</p><p>${message}</p>`,
    //   });

    console.log("[contact]", {
      name,
      email,
      subject,
      preview: message.slice(0, 80),
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
