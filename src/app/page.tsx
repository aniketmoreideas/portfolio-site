'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const Header = dynamic(() => import('../../components/Header'), { ssr: false });
const Hero = dynamic(() => import('../../components/Hero'), { ssr: false });
const Experience = dynamic(() => import('../../components/Experience'), { ssr: false });
const Skills = dynamic(() => import('../../components/Skills'), { ssr: false });
const Projects = dynamic(() => import('../../components/Projects'), { ssr: false });
const Contact = dynamic(() => import('../../components/Contact'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
