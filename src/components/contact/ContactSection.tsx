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
  Copy,
  Check,
  Code2
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; message: string; inquiryType: string } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

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
        setSubmittedData({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          inquiryType: formData.inquiryType
        });
        setStatusMessage(data.message || 'Thank you! Your message has been logged.');
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
      setStatusMessage('Network issue occurred. You can email Nikhil directly at nikhil9508821695@gmail.com.');
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
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-2">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Contact & Inquiries
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
            Open for summer internships, freelance development, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-xs">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Reach out directly via email or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-3">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                        Email Address
                      </span>
                      <a 
                        href={`mailto:${portfolioData.email}`}
                        className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:underline truncate block"
                      >
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Resume link */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                        Curriculum Vitae
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-200">
                        View Resume (PDF)
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Social Directory */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-4">
                Verified Social & Profiles
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
                        className="flex items-center gap-2 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <Icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0" />
                        <span className="truncate">{social.label}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6">
              Fill out the form below. Messages are validated on the server with anti-spam protection.
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
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Your Name <span className="text-zinc-900 dark:text-zinc-100">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Your Email <span className="text-zinc-900 dark:text-zinc-100">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Inquiry Nature
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                >
                  <option value="Internship Opportunity">Summer / Fall Internship Opportunity</option>
                  <option value="Freelance Project">Freelance / Contract Project</option>
                  <option value="Technical Collaboration">Technical Collaboration / Hackathon</option>
                  <option value="General Inquiry">General Inquiry / Coffee Chat</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                  Your Message <span className="text-zinc-900 dark:text-zinc-100">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the project, role, or conversation topic..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                />
              </div>

              {/* Status Message Alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                  {submittedData && (
                    <div className="pt-2 border-t border-emerald-200/50 dark:border-emerald-500/20">
                      <a
                        href={`mailto:${portfolioData.email}?subject=${encodeURIComponent(`Inquiry from ${submittedData.name}: ${submittedData.inquiryType}`)}&body=${encodeURIComponent(`${submittedData.message}\n\nFrom: ${submittedData.name} (${submittedData.email})`)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold underline text-emerald-900 dark:text-emerald-200 hover:opacity-80"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Click here to also send a copy directly from your Email Client</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 cursor-pointer"
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

                <a
                  href={`mailto:${portfolioData.email}?subject=Portfolio%20Inquiry`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Send via Mail Client</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
