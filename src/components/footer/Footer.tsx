'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/content/portfolioData';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#070b14] py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center">
                NK
              </div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                {portfolioData.name}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Developer & B.Tech CSE student at Vishveshwarya Group of Institutions (VGI), Greater Noida. Focused on clean web engineering and practical AI solutions.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/nikhil007-git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nikhil-kumar-0n7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-slate-900 dark:text-white font-semibold font-mono uppercase text-[11px] mb-3">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="#about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">About Nikhil</Link>
              <Link href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Selected Projects</Link>
              <Link href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Skills & Tech</Link>
              <Link href="#education" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Education & Journey</Link>
              <Link href="#github" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub Repositories</Link>
              <Link href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Contact Form</Link>
            </div>
          </div>

          {/* Privacy & Disclosures */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-slate-900 dark:text-white font-semibold font-mono uppercase text-[11px] mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Privacy & Verification
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
              This site respects your privacy. Form inquiries are handled directly on the server without third-party trackers. All project metrics, education facts, and repo links are authentic and verified.
            </p>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 dark:text-cyan-400 hover:underline font-mono text-[11px]"
              >
                Download Verified Resume (PDF) →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Nikhil Kumar. Built with Next.js & Tailwind CSS.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
