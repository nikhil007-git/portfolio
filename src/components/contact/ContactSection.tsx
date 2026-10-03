'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/content/portfolioData';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ExternalLink, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  LeetCodeIcon, 
  XIcon, 
  InstagramIcon 
} from '@/components/icons/BrandIcons';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Internship Opportunity',
    message: '',
    hp_website: '' // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent.');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Internship Opportunity',
          message: '',
          hp_website: ''
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to submit form. Please email Nikhil directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error occurred. You can reach out directly via nikhil9508821695@gmail.com.');
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return LinkedinIcon;
      case 'github':
        return GithubIcon;
      case 'leetcode':
        return LeetCodeIcon;
      case 'geeksforgeeks':
        return Code2;
      case 'x':
        return XIcon;
      case 'instagram':
        return InstagramIcon;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 block mb-2">
              06 // Reach Out
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              Let&apos;s Connect
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Open for summer internships, freelance projects, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 bg-slate-900/40 dark:bg-slate-900/40 light:bg-white">
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                Direct Inquiries
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                Prefer direct communication? Send an email or connect through LinkedIn. I prioritize prompt and thoughtful replies.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 truncate block">
                      {portfolioData.email}
                    </span>
                  </div>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        Curriculum Vitae
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                        View / Download Resume (PDF)
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Social Directory */}
            <div className="p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 bg-slate-900/40 dark:bg-slate-900/40 light:bg-white">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Verified Social & Coding Profiles
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {portfolioData.socials
                  .filter((s) => s.platform !== 'email')
                  .map((social) => {
                    const Icon = getSocialIcon(social.platform);
                    return (
                      <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800/70 light:border-slate-200 bg-slate-950/30 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{social.label}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800/80 light:border-slate-200 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
              Fill out the form below. Messages are logged securely on the server with anti-spam protection.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="hp_website"
                value={formData.hp_website}
                onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Inquiry Nature
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="Internship Opportunity">Summer / Fall Internship Opportunity</option>
                  <option value="Freelance Project">Freelance / Contract Project</option>
                  <option value="Technical Collaboration">Technical Collaboration / Hackathon</option>
                  <option value="General Inquiry">General Inquiry / Coffee Chat</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the project, role, or conversation topic..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/60 dark:bg-slate-950/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Status Message Alerts */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {status === 'submitting' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
