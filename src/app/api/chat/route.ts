import { NextRequest, NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT, FALLBACK_FAQ } from '@/lib/ai-grounding';
import { portfolioData } from '@/content/portfolioData';

// Simple in-memory rate limiter: max 15 requests per minute per IP
const ipRequests = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 15;

  const record = ipRequests.get(ip);
  if (!record || now > record.resetTime) {
    ipRequests.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'You have reached the request limit. Please wait a minute before asking another question.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const query = typeof body.message === 'string' ? body.message.trim() : '';

    if (!query) {
      return NextResponse.json({ error: 'Please provide a message.' }, { status: 400 });
    }

    if (query.length > 500) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep your question under 500 characters.' },
        { status: 400 }
      );
    }

    const lowerQuery = query.toLowerCase();
    const tokens = lowerQuery.split(/[\s,?.!;:()]+/).filter(Boolean);

    // 1. Direct greeting check
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'sup', 'hola'];
    if (tokens.some((t: string) => greetings.includes(t)) && tokens.length <= 4) {
      const greetingAnswer = FALLBACK_FAQ.find((f) => f.keywords.includes('hi'))?.answer;
      if (greetingAnswer) {
        return NextResponse.json({
          reply: greetingAnswer,
          grounded: true,
          source: 'portfolio-grounded-kb'
        });
      }
    }

    // 2. Check if a valid Google AI Studio Gemini API key is configured (starts with AIzaSy)
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey.startsWith('AIzaSy')) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    { text: AI_SYSTEM_PROMPT },
                    { text: `Visitor Question: ${query}` }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 500
              }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            return NextResponse.json({
              reply: generatedText,
              grounded: true,
              source: 'gemini'
            });
          }
        }
      } catch {
        // Fallback to grounded knowledge base below if remote call fails
      }
    }

    // 3. Grounded deterministic matcher based on published portfolio facts
    let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

    for (const item of FALLBACK_FAQ) {
      let score = 0;
      for (const kw of item.keywords) {
        if (kw.includes(' ')) {
          if (lowerQuery.includes(kw)) {
            score += 10;
          }
        } else if (tokens.includes(kw) || lowerQuery.includes(kw)) {
          score += kw.length >= 6 ? 6 : kw.length >= 4 ? 4 : 2;
        }
      }
      if (score > bestMatch.score) {
        bestMatch = { score, answer: item.answer };
      }
    }

    if (bestMatch.score > 0) {
      return NextResponse.json({
        reply: bestMatch.answer,
        grounded: true,
        source: 'portfolio-grounded-kb'
      });
    }

    // Default polite safe answer when no exact match is found
    const defaultResponse = `I want to make sure you get accurate information about Nikhil! While I don't have a specific pre-indexed fact for that exact question, here are quick details:\n\n• **Education:** Class X (2023), Class XII (2025), and B.Tech CSE (2025–2029) at VGI Greater Noida.\n• **Key Projects:** KisanMitra, VGI Canteen System, Real-Time Weather App.\n• **Contact Directly:** ${portfolioData.email} or [LinkedIn](${portfolioData.socials.find(s => s.platform === 'linkedin')?.url}).\n\nFeel free to ask about his tech stack, college, or featured projects!`;

    return NextResponse.json({
      reply: defaultResponse,
      grounded: true,
      source: 'portfolio-grounded-kb'
    });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your question. Please try again or email Nikhil directly.' },
      { status: 500 }
    );
  }
}
