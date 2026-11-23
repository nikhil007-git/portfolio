import { NextRequest, NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT, FALLBACK_FAQ } from '@/lib/ai-grounding';
import { portfolioData } from '@/content/portfolioData';

// Simple in-memory rate limiter: max 25 requests per minute per IP
const ipRequests = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 25;

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

    // Read GEMINI_API_KEY from environment variables (e.g., .env.local or Vercel Environment Variables)
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const models = ['gemini-2.5-flash', 'gemini-flash-latest'];

      for (const model of models) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
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
                  maxOutputTokens: 600,
                  thinkingConfig: { thinkingBudget: 0 }
                }
              }),
              signal: controller.signal
            }
          );

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (generatedText && generatedText.trim().length > 0) {
              return NextResponse.json({
                reply: generatedText.trim(),
                grounded: true,
                source: 'gemini'
              });
            }
          }
        } catch {
          // If network timeout or remote API fails, try next model or drop down to local grounded knowledge base
          continue;
        }
      }
    }

    // Grounded deterministic matcher based on verified portfolio facts
    const cleanedQuery = query.toLowerCase().replace(/[^\w\s]/g, ' ');
    const queryWords = cleanedQuery.split(/\s+/).filter((w: string) => w.length > 0);

    let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

    for (const item of FALLBACK_FAQ) {
      let score = 0;
      for (const kw of item.keywords) {
        const lowerKw = kw.toLowerCase();
        if (cleanedQuery.includes(lowerKw)) {
          // Exact substring phrase match
          score += lowerKw.length >= 6 ? 6 : lowerKw.length >= 4 ? 4 : 2;
        } else if (queryWords.includes(lowerKw)) {
          score += 3;
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
    const defaultResponse = `Hello! Nikhil Kumar is a Full-Stack Developer and B.Tech CSE student (2025–2029) at VGI Greater Noida. He builds web applications with React, Next.js, Node.js, and modern databases.\n\n• Top Projects: KisanMitra (https://kisan-mitra-brown.vercel.app), VGI Canteen (https://vgi-canteen-frontend.vercel.app)\n• GitHub: https://github.com/nikhil007-git\n• LinkedIn: https://linkedin.com/in/nikhil-kumar-0n7\n• Email: ${portfolioData.email}\n\nFeel free to ask about his technical stack, live projects, or academic background!`;

    return NextResponse.json({
      reply: defaultResponse,
      grounded: true,
      source: 'portfolio-grounded-kb'
    });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your question. Please try again or email Nikhil directly at nikhil9508821695@gmail.com.' },
      { status: 500 }
    );
  }
}
