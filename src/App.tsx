import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useCursorEffect } from './hooks/useCursorEffect';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  
  useCursorEffect(cursorRef, cursorGlowRef);
  useScrollAnimation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-fuchsia rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorGlowRef}
        className="fixed w-32 h-32 bg-orchid-light rounded-full pointer-events-none z-40 opacity-20 blur-xl transition-transform duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orchid-primary/5 to-transparent animate-pulse-slow" />
      </div>
      
      {/* Main Content */}
      <Header />
      <main className="relative z-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;