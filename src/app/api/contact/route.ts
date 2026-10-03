import { NextRequest, NextResponse } from 'next/server';

interface ContactRequestBody {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
  hp_website?: string; // honeypot
}

const contactRateLimits = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxSubmissions = 5;

  const record = contactRateLimits.get(ip);
  if (!record || now > record.resetTime) {
    contactRateLimits.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxSubmissions) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions from this connection. Please wait 10 minutes or email Nikhil directly at nikhil9508821695@gmail.com.' },
        { status: 429 }
      );
    }

    const body: ContactRequestBody = await req.json();

    // Honeypot check: If bots fill in hp_website, silently reject
    if (body.hp_website && body.hp_website.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    const name = body.name?.trim() || '';
    const email = body.email?.trim() || '';
    const inquiryType = body.inquiryType?.trim() || 'General Inquiry';
    const message = body.message?.trim() || '';

    // Field validations
    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Please enter a valid name (at least 2 characters).' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ error: 'Please provide a descriptive message (at least 10 characters).' }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: 'Message cannot exceed 2000 characters.' }, { status: 400 });
    }

    // Server-side logging for development / audit
    console.log(`[Contact Form Submission] From: ${name} <${email}> [Type: ${inquiryType}] Length: ${message.length}`);

    // If an external service like Resend / SendGrid / Formspree is configured, send it here:
    // (We also provide a direct mailto action in the client UI for 100% guarantee)
    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your inquiry regarding "${inquiryType}" has been logged. Nikhil will review your message and reply via ${email} soon.`
    });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message. Please reach out directly to nikhil9508821695@gmail.com.' },
      { status: 500 }
    );
  }
}
