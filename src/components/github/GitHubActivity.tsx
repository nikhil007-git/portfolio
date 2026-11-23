'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
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
    <section id="github" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-2">
              Code & Repositories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              GitHub Activity
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/nikhil007-git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@nikhil007-git</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Status Notice */}
        {statusNotice && (
          <div className="flex items-center gap-2 p-3 mb-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <AlertCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>{statusNotice}</span>
          </div>
        )}

        {/* Repos Grid */}
        {loading ? (
          <div className="flex items-center justify-center p-12 text-zinc-500 text-xs font-mono gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-zinc-500" />
            <span>Loading verified repositories...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {repos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 shrink-0" />
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                    {repo.description || 'Full-stack repository on GitHub.'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {repo.language}
                  </span>
                  <span>{repo.isCurated ? 'Verified' : 'Active'}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
