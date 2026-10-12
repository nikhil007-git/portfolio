'use client';

import React from 'react';
import { portfolioData } from '@/content/portfolioData';
import { Compass, Sparkles, Terminal } from 'lucide-react';

export function ExploringSection() {
  const { currentlyExploring } = portfolioData;

  return (
    <section className="py-16 border-t border-slate-200 dark:border-slate-800/60 relative bg-slate-50/70 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
            Current Exploration & R&D
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8">
          What I&apos;m Currently Deepening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyExploring.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-violet-500/40 transition-colors flex flex-col justify-between shadow-xs dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 font-medium">
                    {item.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.focus}
                  </span>
                </div>

                <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
