'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { GitHubActivity } from '@/components/github/GitHubActivity';
import { EducationSection } from '@/components/education/EducationSection';
import { ExploringSection } from '@/components/exploring/ExploringSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { AskNikhilAI } from '@/components/chat/AskNikhilAI';
import { FloatingAIChatButton } from '@/components/chat/FloatingAIChatButton';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      <main className="flex-1">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <GitHubActivity />
        <EducationSection />
        <ExploringSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating interactive AI Assistant Trigger */}
      <FloatingAIChatButton onOpen={() => setIsChatOpen(true)} />

      {/* Ask Nikhil AI Dialog Drawer */}
      <AskNikhilAI
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}

