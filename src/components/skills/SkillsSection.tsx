'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/content/portfolioData';
import { Sparkles, Code, Server, Database, Wrench, Terminal, Cpu } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    'Frontend': Code,
    'Backend': Server,
    'Languages': Terminal,
    'Data & Databases': Database,
    'Tools & DevOps': Wrench,
    'AI & Machine Learning': Cpu
  };

  const categories = ['All', ...portfolioData.skills.map((s) => s.category)];

  const filteredGroups = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((g) => g.category === activeCategory);

  const getStageBadge = (stage?: string) => {
    switch (stage) {
      case 'Proficient':
        return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
      case 'Active Working':
        return 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30';
      case 'Exploring':
        return 'bg-violet-50 dark:bg-violet-500/10 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-500/30';
      case 'Foundational':
        return 'bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-2">
              Capabilities & Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Organized by practical development experience. No arbitrary percentages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGroups.map((group) => {
            const Icon = categoryIcons[group.category] || Sparkles;
            return (
              <div
                key={group.category}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${getStageBadge(
                          skill.stage
                        )}`}
                      >
                        <span>{skill.name}</span>
                        {skill.stage && (
                          <span className="text-[10px] opacity-75 font-mono">
                            • {skill.stage}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{group.skills.length} technologies</span>
                  <span className="text-cyan-600 dark:text-cyan-400">Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
