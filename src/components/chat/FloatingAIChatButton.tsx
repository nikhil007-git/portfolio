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
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border border-zinc-800 dark:border-zinc-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 cursor-pointer"
      >
        <div className="relative">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-700 dark:border-zinc-300 shrink-0">
            <img src="/profile.jpg" alt="Nikhil" className="w-full h-full object-cover object-top" />
          </div>
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Ask Nikhil AI
        </span>
      </button>
    </div>
  );
}
