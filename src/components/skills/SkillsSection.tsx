'use client';

import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal,
  Cpu
} from 'lucide-react';

export function SkillsSection() {
  const skillCards = [
    {
      title: 'Frontend Development',
      category: 'Client & UI',
      icon: Layout,
      skills: [
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5 & Semantic Markup', highlight: false },
        { name: 'CSS3 & Modern Layouts', highlight: false },
      ]
    },
    {
      title: 'Backend & APIs',
      category: 'Server & Logic',
      icon: Server,
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js', highlight: true },
        { name: 'REST API Design', highlight: true },
        { name: 'Middleware Architecture', highlight: false },
        { name: 'Authentication Basics', highlight: false },
      ]
    },
    {
      title: 'Databases & Languages',
      category: 'Data & Core',
      icon: Database,
      skills: [
        { name: 'MongoDB', highlight: true },
        { name: 'MySQL', highlight: true },
        { name: 'Python', highlight: true },
        { name: 'Java', highlight: true },
        { name: 'C / C++', highlight: false },
        { name: 'Mongoose ODM', highlight: false },
      ]
    },
    {
      title: 'DevOps & AI Workflows',
      category: 'Tools & Ecosystem',
      icon: Cpu,
      skills: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'Vercel Deployment', highlight: true },
        { name: 'Postman', highlight: false },
        { name: 'VS Code', highlight: false },
        { name: 'LLM API Integration', highlight: true },
        { name: 'Prompt Engineering', highlight: false },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-1">
              Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
            Core tools and modern libraries I use to build full-stack web products.
          </p>
        </div>

        {/* 4 Clean Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {card.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-zinc-50 dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600'
                          : 'bg-white dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
