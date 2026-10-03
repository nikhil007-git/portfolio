'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, Lightbulb, Compass, Award } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 dark:bg-[#0b1120] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col focus:outline-none">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-slate-900/95 dark:bg-[#0b1120]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 light:border-slate-200">
          <div>
            <span className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700 uppercase tracking-wider block">
              Case Study & Technical Architecture
            </span>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/80 light:hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 space-y-8 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
          {/* Quick Subtitle & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 light:border-slate-200">
            <div>
              <p className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{project.githubUrlSecondary ? 'Frontend Repo' : 'Repository'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {project.githubUrlSecondary && (
                <a
                  href={project.githubUrlSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Backend Repo</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* 1. Context & Problem */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-cyan-400 font-mono text-xs">01</span> Context & Problem Statement
            </h3>
            <p className="leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/40">
              {caseStudy.contextProblem}
            </p>
          </div>

          {/* 2. Goals */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-cyan-400 font-mono text-xs">02</span> Engineering Goals
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.goals.map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/30 border border-slate-800/50 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 & 4. Role, Contribution & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-cyan-400 font-mono text-xs">03</span> Role & Contribution
              </h3>
              <p className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40 text-xs sm:text-sm leading-relaxed">
                {caseStudy.roleContribution}
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-cyan-400 font-mono text-xs">04</span> Architecture & Approach
              </h3>
              <p className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40 text-xs sm:text-sm leading-relaxed">
                {caseStudy.approachArchitecture}
              </p>
            </div>
          </div>

          {/* 5. Key Features */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-cyan-400 font-mono text-xs">05</span> Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs sm:text-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Technology Choices & Rationale */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
              <span className="text-cyan-400 font-mono text-xs">06</span> Tech Stack Choices & Rationale
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {caseStudy.techChoices.map((choice, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/60"
                >
                  <span className="font-semibold text-cyan-300 text-xs block mb-1">
                    {choice.tech}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {choice.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7 & 8. Challenges & Verified Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>07 Challenges & Learnings</span>
              </h3>
              <p className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40 text-xs sm:text-sm leading-relaxed">
                {caseStudy.challengesLearning}
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>08 Verified Outcome</span>
              </h3>
              <p className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/40 text-xs sm:text-sm leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* 9. Future Improvements */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-violet-400" />
              <span>09 Roadmap & Future Enhancements</span>
            </h3>
            <ul className="space-y-2">
              {caseStudy.futureImprovements.map((imp, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/30 border border-slate-800/40 text-xs sm:text-sm"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-4 bg-slate-900/95 dark:bg-[#0b1120]/95 light:bg-white/95 border-t border-slate-800 light:border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
