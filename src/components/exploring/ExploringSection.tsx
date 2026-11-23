'use client';

import React from 'react';
import { portfolioData } from '@/content/portfolioData';
import { Compass } from 'lucide-react';

export function ExploringSection() {
  const { currentlyExploring } = portfolioData;

  return (
    <section className="py-16 border-t border-zinc-200 dark:border-zinc-800/60 relative bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-2">
          <Compass className="w-4 h-4 text-zinc-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
            Current Exploration & R&D
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          What I&apos;m Currently Deepening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentlyExploring.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium">
                    {item.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.focus}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/40"
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
