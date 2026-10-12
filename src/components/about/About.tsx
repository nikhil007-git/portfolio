'use client';

import React from 'react';
import { portfolioData } from '@/content/portfolioData';
import { GraduationCap, Code, Compass, Layers } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Computer Science Core',
      desc: 'Focused on algorithms, data structures, and database systems at Vishveshwarya Group of Institutions (VGI), Greater Noida.'
    },
    {
      icon: Code,
      title: 'Full-Stack Engineering',
      desc: 'Building responsive frontends in React & Next.js paired with structured RESTful APIs in Node.js, Express, and MongoDB.'
    },
    {
      icon: Compass,
      title: 'Applied AI Workflows',
      desc: 'Experimenting hands-on with LLM integrations, prompt engineering, and intelligent web interfaces grounded in real data.'
    },
    {
      icon: Layers,
      title: 'Real-World Focus',
      desc: 'Passionate about engineering software that solves practical daily problems—like campus food queue management and farmer advisories.'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-2">
              Background & Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              About Nikhil
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Turning software foundations into responsive, intuitive digital tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {portfolioData.bio.map((paragraph, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-2xs"
              >
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
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
