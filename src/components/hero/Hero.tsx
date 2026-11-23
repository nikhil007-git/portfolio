'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/content/portfolioData';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Sparkles, 
  GraduationCap,
  Terminal,
  Code2,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/icons/BrandIcons';

interface HeroProps {
  onOpenChat: () => void;
}

export function Hero({ onOpenChat }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-violet-500/10 blur-3xl rounded-full opacity-60 dark:opacity-30"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Minimal Punchy Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Internships & Freelance</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building modern{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                web applications
              </span>{' '}
              with clean code.
            </h1>

            {/* Minimal Bio (1 crisp sentence) */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Nikhil Kumar</strong>. Full-stack developer crafting fast, responsive web products with React, Next.js & Node.js, studying B.Tech CSE (&apos;29) at VGI Greater Noida.
            </p>

            {/* Quick Education & Credentials Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1 pb-2">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>B.Tech CSE (2025–2029)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Greater Noida, India</span>
              </div>
              <span>•</span>
              <span>10th (2023) • 12th (2025)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-xs transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Ask AI</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://github.com/nikhil007-git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                title="GitHub @nikhil007-git"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nikhil-kumar-0n7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/Nikhil_kumar_10/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:nikhil9508821695@gmail.com"
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                nikhil9508821695@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Handcrafted Developer Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-[#0d1424] dark:to-[#080d18] p-6 shadow-xl overflow-hidden">
              {/* Decorative top-right accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Code/Window header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>nikhil.profile.ts</span>
                </div>
                <span className="w-4" />
              </div>

              {/* Developer identity summary */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-violet-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
                  NK
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      Nikhil Kumar
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Full-Stack Engineer • VGI Greater Noida
                  </p>
                </div>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Projects</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">8+ Deployed</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Primary Stack</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">React & Node</span>
                </div>
              </div>

              {/* Live Project Quick-Chips */}
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-medium">
                  Featured Live Apps
                </span>
                <div className="space-y-1.5">
                  <a
                    href="https://kisan-mitra-brown.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300 transition-colors group/item"
                  >
                    <span className="font-medium text-emerald-800 dark:text-emerald-300">🌾 KisanMitra (Weather & Advisory)</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500 group-hover/item:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://vgi-canteen-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 transition-colors group/item"
                  >
                    <span className="font-medium text-amber-800 dark:text-amber-300">🍽️ VGI Canteen (Queue Tokens)</span>
                    <ExternalLink className="w-3 h-3 text-amber-500 group-hover/item:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://leader-board-backend-hcv2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-violet-500/5 hover:bg-violet-500/10 border border-violet-500/20 text-xs text-slate-700 dark:text-slate-300 transition-colors group/item"
                  >
                    <span className="font-medium text-violet-800 dark:text-violet-300">🏆 LeaderBoard Platform (Live Sync)</span>
                    <ExternalLink className="w-3 h-3 text-violet-500 group-hover/item:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
