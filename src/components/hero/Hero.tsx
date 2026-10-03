'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/content/portfolioData';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Layers, 
  Bot, 
  Code2 
} from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

export function Hero({ onOpenChat }: HeroProps) {
  const quickSkills = [
    { label: 'React / Next.js', icon: Layers },
    { label: 'Node.js & Express', icon: Terminal },
    { label: 'AI & LLM Workflows', icon: Bot },
    { label: 'DSA & Systems', icon: Code2 }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Ambient gradient glow spots */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-[350px] h-[350px] bg-violet-600/10 blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Status & Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{portfolioData.availability}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.15] mb-6">
            I build thoughtful{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              web experiences
            </span>{' '}
            and explore what AI can make possible.
          </h1>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-2xl">
            Hi, I’m <strong className="text-white dark:text-white light:text-slate-900 font-semibold">{portfolioData.name}</strong>, a Full-Stack Developer & B.Tech CSE student (Class of 2029) at Vishveshwarya Group of Institutions. I specialize in component architectures, robust REST APIs, and hands-on AI prototyping.
          </p>

          {/* Quick location and role info */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{portfolioData.locationDisplay}</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>B.Tech CSE (2025–2029)</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm border border-slate-700 dark:border-slate-700 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Get In Touch</span>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:bg-violet-500/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Ask AI About Me</span>
            </button>
          </div>

          {/* Highlight badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 pt-8 border-t border-slate-800/60 light:border-slate-200">
            {quickSkills.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/80 border border-slate-800/50 light:border-slate-200"
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 truncate">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
