'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingAIChatButtonProps {
  onOpen: () => void;
}

export function FloatingAIChatButton({ onOpen }: FloatingAIChatButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open Ask Nikhil AI Assistant"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-lg hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 backdrop-blur-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
      >
        <div className="relative">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        </div>
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Ask Nikhil AI
        </span>
      </button>
    </div>
  );
}
