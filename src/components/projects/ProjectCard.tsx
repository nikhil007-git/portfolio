'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 bg-slate-900/40 dark:bg-slate-900/40 light:bg-white hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 dark:text-cyan-300 light:text-cyan-700">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300">
              <Sparkles className="w-3 h-3 text-violet-400" />
              Featured
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-3 font-medium">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-5 space-y-1.5">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="text-cyan-400 font-bold">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-800/60 light:border-slate-100 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-1"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              title="View Repository on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
              title="View Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
