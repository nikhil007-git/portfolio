'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-cyan-500/40 dark:hover:border-cyan-500/50 transition-all duration-200 shadow-xs hover:shadow-md group overflow-hidden">
      <div>
        {/* Visual Mockup Banner */}
        <div 
          onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
          className="cursor-pointer"
        >
          <ProjectThumbnail 
            id={project.id} 
            title={project.title} 
            demoUrl={project.demoUrl} 
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 font-medium">
                <Sparkles className="w-2.5 h-2.5 text-violet-500" />
                Featured
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
            {project.title}
          </h3>

          {/* Minimal 1-Sentence Summary */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Clean Tech Pills (Max 4 to keep it minimal) */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs font-semibold shadow-xs transition-all hover:scale-[1.02]"
              title="Open Live Website"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
