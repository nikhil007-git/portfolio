'use client';

import React from 'react';
import { Sparkles, MessageSquareText } from 'lucide-react';

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
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/90 dark:bg-[#0c1324]/90 light:bg-white border border-cyan-500/40 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 shadow-xl shadow-cyan-500/20 backdrop-blur-md hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <div className="relative">
          <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Ask Nikhil AI
        </span>
      </button>
    </div>
  );
}
