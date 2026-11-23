'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/content/portfolioData';
import { Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#09090b] py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs flex items-center justify-center">
                NK
              </div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white">
                {portfolioData.name}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Full-Stack Developer & B.Tech CSE student at Vishveshwarya Group of Institutions (VGI), Greater Noida. Focused on clean web engineering and practical software.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/nikhil007-git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nikhil-kumar-0n7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-zinc-900 dark:text-white font-semibold font-mono uppercase text-[11px] mb-3">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">About Nikhil</Link>
              <Link href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Selected Projects</Link>
              <Link href="#skills" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Skills & Tech</Link>
              <Link href="#education" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Education & Journey</Link>
              <Link href="#github" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub Repositories</Link>
              <Link href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Privacy & Disclosures */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-zinc-900 dark:text-white font-semibold font-mono uppercase text-[11px] mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
              <span>Authenticity & Verification</span>
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[11px]">
              All project metrics, live deployments, education milestones, and repository links on this portfolio are authentic, deployed, and verified.
            </p>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 dark:text-zinc-300 hover:underline font-mono text-[11px]"
              >
                Download Resume (PDF) →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Nikhil Kumar. Designed with modern minimalism.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">10th (2023) • 12th (2025) • B.Tech CSE (2025–2029)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
