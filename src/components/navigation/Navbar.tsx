'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/content/portfolioData';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Sparkles, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export function Navbar({ onOpenChat }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'GitHub', href: '#github' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-[#070b14]/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          aria-label="Nikhil Kumar - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            NK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              Nikhil Kumar
            </span>
            <span className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-600">
              fullstack.ai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ask Nikhil AI trigger button */}
          <button
            type="button"
            onClick={onOpenChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/15 to-violet-500/15 border border-cyan-500/30 text-cyan-300 dark:text-cyan-300 light:text-cyan-700 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Ask AI</span>
          </button>

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-800 light:border-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={onOpenChat}
            aria-label="Ask Nikhil AI"
            className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-slate-700/60 text-slate-300 hover:text-cyan-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-slate-950/95 dark:bg-[#070b14]/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 light:border-slate-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-cyan-400 rounded-lg hover:bg-slate-900/40"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-300 border border-slate-700 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Download Resume
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Ask Nikhil AI Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
