'use client';

import React from 'react';
import { portfolioData } from '@/content/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle, Milestone as MilestoneIcon } from 'lucide-react';

export function EducationSection() {
  const { education, milestones } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-2">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Education & Milestones
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            Formal computer science studies paired with continuous hands-on development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formal Education Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-mono w-fit mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {education.degree}
              </h3>
              <p className="text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-3">
                {education.field}
              </p>

              <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.institution}, {education.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.startYear} – {education.expectedGraduation} (Expected)</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  Key Focus Areas
                </h4>
                {education.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Academic Progression: 10th & 12th */}
              {education.levels && (
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                    Academic Qualifications & Progression
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {education.levels.slice(0, 2).map((lvl, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-semibold text-xs text-slate-900 dark:text-white">
                            {lvl.level}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                            {lvl.year}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {lvl.streamOrFocus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Coursework */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                Core Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.relevantCoursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline / Milestones */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 mb-4">
              <MilestoneIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Learning & Development Timeline</span>
            </h3>

            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 hover:border-cyan-500/40 transition-colors shadow-2xs">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                        {m.period}
                      </span>
                      {m.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {m.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {m.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
