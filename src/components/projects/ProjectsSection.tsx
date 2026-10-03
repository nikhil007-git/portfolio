'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/content/portfolioData';
import { Project } from '@/types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles } from 'lucide-react';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = ['All', 'Featured', 'Full-Stack', 'Frontend', 'Interactive', 'Utility & Web'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return project.featured;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 block mb-2">
              03 // Engineering Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Verified software projects built for real users, agricultural workflows, and campus utilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100 border border-slate-800/80 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-cyan-400/50'
                }`}
              >
                {filter === 'Featured' ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Featured
                  </span>
                ) : (
                  filter
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
