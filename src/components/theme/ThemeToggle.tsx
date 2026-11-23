'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-200 bg-zinc-100 border-zinc-200 text-zinc-700 dark:bg-zinc-900/90 dark:border-zinc-800 dark:text-zinc-300 ${className}`}
      >
        <span className="w-4 h-4 block" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 dark:border-zinc-800 dark:text-zinc-300 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700 hover:text-zinc-900 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
