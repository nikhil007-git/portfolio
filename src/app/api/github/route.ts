import { NextResponse } from 'next/server';
import { portfolioData } from '@/content/portfolioData';

export const revalidate = 3600; // Cache for 1 hour

interface GitHubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

export async function GET() {
  const curatedFallback = portfolioData.projects.map((p) => ({
    name: p.title,
    repoName: p.githubUrl ? p.githubUrl.split('/').pop() : p.id,
    description: p.description,
    url: p.githubUrl || 'https://github.com/nikhil007-git',
    stars: 0,
    forks: 0,
    language: p.tags[0] || 'JavaScript',
    updatedAt: new Date().toISOString(),
    isCurated: true
  }));

  try {
    const res = await fetch('https://api.github.com/users/nikhil007-git/repos?sort=updated&per_page=12', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'NikhilKumar-Portfolio'
      },
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      return NextResponse.json({
        repos: curatedFallback,
        source: 'curated-cache',
        notice: 'Displaying curated repository highlights (GitHub API sync cached).'
      });
    }

    const data: GitHubRepoResponse[] = await res.json();
    const formatted = data
      .filter((repo) => !repo.fork)
      .slice(0, 8)
      .map((repo) => ({
        name: repo.name,
        repoName: repo.name,
        description: repo.description || 'Repository maintained by Nikhil Kumar.',
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Code',
        updatedAt: repo.updated_at,
        isCurated: false
      }));

    return NextResponse.json({
      repos: formatted.length > 0 ? formatted : curatedFallback,
      source: 'live-github',
      notice: 'Synchronized with public GitHub activity.'
    });
  } catch {
    return NextResponse.json({
      repos: curatedFallback,
      source: 'curated-cache',
      notice: 'Displaying curated repository highlights.'
    });
  }
}
