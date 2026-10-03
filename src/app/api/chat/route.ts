import { NextRequest, NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT, FALLBACK_FAQ } from '@/lib/ai-grounding';
import { portfolioData } from '@/content/portfolioData';

// Simple in-memory rate limiter: max 10 requests per minute per IP
const ipRequests = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 12;

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

    // Check if an external Gemini API key is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
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

    // Grounded deterministic matcher based on published portfolio facts
    let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

    for (const item of FALLBACK_FAQ) {
      let score = 0;
      for (const kw of item.keywords) {
        if (lowerQuery.includes(kw)) {
          score += kw.length >= 6 ? 5 : kw.length >= 4 ? 3 : 1;
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
    const defaultResponse = `I want to make sure you get accurate information about Nikhil! While I don't see a specific answer to that in his published portfolio, Nikhil is always happy to connect.\n\n• Email: ${portfolioData.email}\n• LinkedIn: https://linkedin.com/in/nikhil-kumar-0n7\n• GitHub: https://github.com/nikhil007-git\n\nFeel free to explore his featured projects like KisanMitra and VGI Canteen in the projects section!`;

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
