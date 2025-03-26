'use client';

import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
