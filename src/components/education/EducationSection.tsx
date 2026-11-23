'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function EducationSection() {
  const qualifications = [
    {
      period: '2025 – 2029',
      status: 'In Progress',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Vishveshwarya Group of Institutions (VGI)',
      location: 'Greater Noida, Uttar Pradesh',
      focus: 'Data Structures, Algorithms, Full-Stack Architecture, Database Management',
      current: true
    },
    {
      period: 'Completed 2025',
      status: 'Senior Secondary',
      degree: 'Class 12th (Higher Secondary)',
      institution: 'Senior Secondary Education',
      location: 'India',
      focus: 'Physics, Chemistry, Mathematics (PCM Science Stream)',
      current: false
    },
    {
      period: 'Completed 2023',
      status: 'Secondary School',
      degree: 'Class 10th (Matriculation)',
      institution: 'Secondary School Education',
      location: 'India',
      focus: 'Foundational Mathematics, Science, and Computer Basics',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
              Academic Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Education & Qualifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Formal computer science studies and academic milestones.
          </p>
        </div>

        {/* 3 Sleek Timeline Cards */}
        <div className="space-y-4">
          {qualifications.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-200 ${
                item.current
                  ? 'border-cyan-500/40 dark:border-cyan-500/30 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    item.current
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {item.institution} • <span className="text-slate-400">{item.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-start">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                    item.current
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Focus detail pill */}
              <div className="pt-2 sm:pl-14 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Focus: </span>
                <span className="text-slate-700 dark:text-slate-300">{item.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
