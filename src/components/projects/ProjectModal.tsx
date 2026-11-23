'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, Lightbulb } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col focus:outline-none">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold block">
              Case Study & Technical Architecture
            </span>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 space-y-8 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          {/* Quick Subtitle & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{project.githubUrlSecondary ? 'Frontend Repo' : 'Repository'}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              )}
              {project.githubUrlSecondary && (
                <a
                  href={project.githubUrlSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Backend Repo</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {caseStudy ? (
            <div className="space-y-6">
              {/* Problem & Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm mb-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Problem Context</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {caseStudy.contextProblem}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm mb-2.5">
                    <Lightbulb className="w-4 h-4 text-emerald-500" />
                    <span>Key Objectives</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    {caseStudy.goals.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture & Role */}
              <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">
                  System Architecture & Approach
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {caseStudy.approachArchitecture}
                </p>
                <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                  <strong>My Contribution: </strong> {caseStudy.roleContribution}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-500">Full technical documentation available in repository.</p>
          )}
        </div>
      </div>
    </div>
  );
}
