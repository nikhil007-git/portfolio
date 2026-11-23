'use client';

import React from 'react';
import { 
  Code, 
  Layers, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';

export function About() {
  const highlights = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Building responsive React & Next.js interfaces backed by Node.js, Express, and MongoDB.',
      icon: Code,
    },
    {
      title: 'Practical Problem Solving',
      desc: 'Creating tools that solve real daily problems—from campus cafeteria queues to farmer advisories.',
      icon: Layers,
    },
    {
      title: 'CS Core & Algorithms',
      desc: 'Consistent problem solving on LeetCode and GeeksforGeeks, studying B.Tech CSE at VGI Greater Noida.',
      icon: Terminal,
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-1">
              Introduction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
            Turning software foundations into responsive, reliable digital tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                Background
              </span>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I&apos;m an undergraduate Computer Science & Engineering student at <strong className="text-zinc-900 dark:text-white">Vishveshwarya Group of Institutions (VGI), Greater Noida</strong>. I enjoy crafting full-stack web products—from interactive user interfaces to robust RESTful backends.
              </p>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Whether streamlining college cafeteria orders or helping farmers access weather advisories, I focus on writing clean, maintainable code and building practical software that works seamlessly on every device.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                8+ Live Projects
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                LeetCode & GFG Practice
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                B.Tech CSE (2025–2029)
              </span>
            </div>
          </div>

          {/* 3 Compact Feature Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-start gap-4 shadow-xs"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
