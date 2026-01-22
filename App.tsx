
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Perspective style added to enable 3D effects on children
    <div className="relative min-h-screen selection:bg-neon-cyan selection:text-dark-950 overflow-x-hidden bg-dark-950">
      {/* Custom Glow Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan z-[9999] pointer-events-none hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-cyan z-[9999] pointer-events-none hidden md:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
      />

      <Navbar />
      
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
};

export default App;
