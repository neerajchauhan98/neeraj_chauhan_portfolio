import { Navigation } from '@/components/Navigation';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';

export const metadata = {
  title: 'Neeraj Chauhan | Full-Stack Developer',
  description: 'Full-stack developer crafting beautiful, performant web experiences with modern technologies.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <ScrollToTop />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 glass py-8 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
            <p>© 2026 Neeraj Chauhan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
