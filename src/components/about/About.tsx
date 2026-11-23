'use client';

import React from 'react';
import { 
  Code, 
  Layers, 
  Terminal, 
  CheckCircle2,
  MapPin
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
          {/* Portrait Photo Card */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-xs flex flex-col justify-between">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src="/profile.jpg"
                alt="Nikhil Kumar"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <span className="text-sm font-bold block">Nikhil Kumar</span>
                <span className="text-xs text-zinc-300 font-mono">Full-Stack Developer</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Greater Noida, India
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                B.Tech &apos;29
              </span>
            </div>
          </div>

          {/* Bio & Highlights Column */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            {/* Bio Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-3">
                Background & Approach
              </span>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                I&apos;m an undergraduate Computer Science & Engineering student at <strong className="text-zinc-900 dark:text-white">Vishveshwarya Group of Institutions (VGI), Greater Noida</strong>. I enjoy crafting full-stack web products—from interactive user interfaces to robust RESTful backends.
              </p>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                Whether streamlining college cafeteria orders or helping farmers access weather advisories, I focus on writing clean, maintainable code and building practical software that works seamlessly on every device.
              </p>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  8+ Live Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                  LeetCode & GFG Problem Solving
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  10th (2023) • 12th (2025)
                </span>
              </div>
            </div>

            {/* 3 Compact Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-zinc-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
