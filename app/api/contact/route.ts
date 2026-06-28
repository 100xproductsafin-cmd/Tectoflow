import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';

// Placeholder contact API route.
// To wire up email delivery with Resend:
//   1. npm install resend
//   2. Add RESEND_API_KEY to your environment variables
//   3. Uncomment the Resend code below and replace the email logic.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Northbeam <hello@northbeam.studio>',
    //   to: 'hello@northbeam.studio',
    //   subject: `New project inquiry from ${parsed.data.name}`,
    //   text: JSON.stringify(parsed.data, null, 2),
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
