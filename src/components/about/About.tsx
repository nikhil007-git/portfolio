'use client';

import React from 'react';
import { portfolioData } from '@/content/portfolioData';
import { GraduationCap, Code, Compass, HeartHandshake } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      desc: 'Pursuing B.Tech in Computer Science & Engineering at Vishveshwarya Group of Institutions (2025–2029) with core emphasis on Algorithms, DBMS, and Systems.'
    },
    {
      icon: Code,
      title: 'Full-Stack Execution',
      desc: 'Developing end-to-end applications using React, Next.js, Node.js, Express, and databases (MongoDB, MySQL) with clean modular architecture.'
    },
    {
      icon: Compass,
      title: 'AI Curiosity',
      desc: 'Actively exploring intelligent agents, prompt orchestration, and retrieval-augmented generation to augment modern web products.'
    },
    {
      icon: HeartHandshake,
      title: 'Problem-Solving Mindset',
      desc: 'Dedicated to turning everyday challenges—like campus cafeteria congestion or farm advisory access—into intuitive, functional software.'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/60 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 block mb-2">
              01 // Background & Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              About Nikhil
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-sm">
            Turning computer science theory into responsive, human-centric software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
            {portfolioData.bio.map((paragraph, idx) => (
              <p key={idx} className="p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/70 border border-slate-800/40 light:border-slate-200">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl border border-slate-800/60 light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
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
