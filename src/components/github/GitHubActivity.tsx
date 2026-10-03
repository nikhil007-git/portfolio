'use client';

import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

interface RepoItem {
  name: string;
  repoName: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  isCurated: boolean;
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusNotice, setStatusNotice] = useState<string>('');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('/api/github');
        if (res.ok) {
          const data = await res.json();
          setRepos(data.repos || []);
          setStatusNotice(data.notice || '');
        }
      } catch {
        setStatusNotice('GitHub repository cache active.');
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-20 border-t border-slate-800/60 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 block mb-2">
              04 // Open Source & Code Repositories
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              GitHub Repositories
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nikhil007-git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@nikhil007-git</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="https://github.com/nikhilkumar95f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:border-cyan-400/50 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@nikhilkumar95f</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Status Notice */}
        {statusNotice && (
          <div className="flex items-center gap-2 p-3 mb-6 rounded-xl bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50 border border-slate-800/50 light:border-slate-200 text-xs font-mono text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>{statusNotice}</span>
          </div>
        )}

        {/* Repos Grid */}
        {loading ? (
          <div className="flex items-center justify-center p-12 text-slate-400 text-xs font-mono gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
            <span>Syncing verified repositories...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {repos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-800/80 light:border-slate-200 bg-slate-900/40 dark:bg-slate-900/40 light:bg-white hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/50 light:border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-400/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-2.5">
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" />
                        {repo.stars}
                      </span>
                    )}
                    {repo.forks > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-slate-400" />
                        {repo.forks}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
