'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 rounded-xl p-1"
          aria-label="Nikhil Kumar"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-sm flex items-center justify-center tracking-tight shadow-sm group-hover:scale-105 transition-transform">
            NK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white tracking-tight">
              Nikhil Kumar
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/70 px-3 py-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ask AI button */}
          <button
            type="button"
            onClick={onOpenChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Ask AI</span>
          </button>

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={onOpenChat}
            aria-label="Ask Nikhil AI"
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200"
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zinc-500" />
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
                className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800"
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Ask Nikhil AI Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
