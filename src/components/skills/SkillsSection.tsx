'use client';

import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Layers,
  Sparkles
} from 'lucide-react';

interface SkillItem {
  name: string;
  highlight?: boolean;
}

interface SkillCard {
  title: string;
  category: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

export function SkillsSection() {
  const skillCards: SkillCard[] = [
    {
      title: 'Frontend Development',
      category: 'UI & Web',
      icon: Code,
      skills: [
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5 & Semantic UI' },
        { name: 'CSS3 & Responsive Design' }
      ]
    },
    {
      title: 'Backend & APIs',
      category: 'Server Logic',
      icon: Server,
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js', highlight: true },
        { name: 'RESTful API Design', highlight: true },
        { name: 'Middleware Architecture' },
        { name: 'JWT & Authentication Basics' },
        { name: 'API Error Handling' }
      ]
    },
    {
      title: 'Databases & Languages',
      category: 'Core & Data',
      icon: Database,
      skills: [
        { name: 'MongoDB', highlight: true },
        { name: 'MySQL', highlight: true },
        { name: 'Java', highlight: true },
        { name: 'Python', highlight: true },
        { name: 'C / C++' },
        { name: 'SQL Querying' },
        { name: 'Mongoose ODM' }
      ]
    },
    {
      title: 'DevOps & AI Workflows',
      category: 'Tools & Modern Tech',
      icon: Cpu,
      skills: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'Vercel Deployment', highlight: true },
        { name: 'Postman (API Testing)', highlight: true },
        { name: 'LLM API Integration', highlight: true },
        { name: 'Prompt Engineering' },
        { name: 'npm & Package Workflows' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
              Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
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
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-cyan-500/30 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {card.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-cyan-500/50'
                          : 'bg-white dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400'
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
