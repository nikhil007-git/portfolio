'use client';

import React, { useState, useEffect, useRef } from 'react';
import { STARTER_QUESTIONS } from '@/lib/ai-grounding';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  RefreshCw, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  grounded?: boolean;
  timestamp: string;
}

interface AskNikhilAIProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AskNikhilAI({ isOpen, onClose }: AskNikhilAIProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello! I am **Ask Nikhil AI**, an assistant trained strictly on Nikhil Kumar\'s published portfolio, projects, and education. How can I help you learn more about his work?',
      grounded: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSend = async (queryText?: string) => {
    const question = (queryText || input).trim();
    if (!question || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });

      const data = await res.json();

      if (res.ok) {
        const assistantMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: data.reply || 'I am ready to help with other questions about Nikhil\'s portfolio.',
          grounded: data.grounded,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          sender: 'assistant',
          text: data.error || 'I encountered an issue processing that query. Feel free to contact Nikhil at nikhil9508821695@gmail.com.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch {
      const offlineMessage: ChatMessage = {
        id: `bot-offline-${Date.now()}`,
        sender: 'assistant',
        text: 'Network connection issue. You can explore Nikhil\'s projects and skills directly in the sections below, or email him at nikhil9508821695@gmail.com.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, offlineMessage]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ask-nikhil-ai-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full sm:max-w-lg h-[85vh] sm:h-[620px] bg-slate-900 dark:bg-[#0c1222] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Header */}
        <div className="p-4 bg-slate-900/90 dark:bg-[#0c1222]/90 light:bg-white/90 border-b border-slate-800 light:border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 id="ask-nikhil-ai-title" className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-1.5">
                <span>Ask Nikhil AI</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Grounded
                </span>
              </h2>
              <p className="text-[11px] text-slate-400">
                Answers strictly from published portfolio data
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close AI Assistant"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages scroll area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-xs'
                    : 'bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-900 border border-slate-800/80 light:border-slate-200 rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed">
                  {msg.text}
                </div>
                <div className="flex items-center justify-between gap-2 mt-1.5 pt-1 border-t border-slate-800/40 text-[10px] opacity-75 font-mono">
                  <span>{msg.timestamp}</span>
                  {msg.grounded && (
                    <span className="flex items-center gap-1 text-cyan-400">
                      <ShieldCheck className="w-3 h-3" />
                      Portfolio Verified
                    </span>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-2.5 justify-start">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-slate-400 flex items-center gap-2 text-xs font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Checking portfolio verified facts...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Starter Questions */}
        <div className="p-2.5 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-t border-slate-800/60 light:border-slate-200">
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-1.5 px-1">
            <HelpCircle className="w-3 h-3 text-cyan-400" />
            <span>Suggested questions:</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {STARTER_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q)}
                disabled={loading}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input form */}
        <div className="p-3 sm:p-4 bg-slate-900 dark:bg-[#0c1222] light:bg-white border-t border-slate-800 light:border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              maxLength={500}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Nikhil's skills, projects, or degree..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-2 px-1">
            <span>Free-tier conscious • No hallucinated metrics</span>
            <span>{input.length}/500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
