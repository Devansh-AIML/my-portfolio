import React from 'react';
import { motion as MOTION } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor'; // <--- 1. IMPORT THIS
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans text-white relative selection:bg-purple-500 selection:text-white cursor-none"> {/* <--- 2. ADD cursor-none HERE */}
      
      <Cursor /> {/* <--- 3. ADD COMPONENT HERE */}
      <Background />
      <Navbar />

      <main className="relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          <MOTION.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:col-span-2 md:row-span-2">
             <Hero />
          </MOTION.div>

          <MOTION.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
            <Stats />
          </MOTION.div>

          <MOTION.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-1 md:row-span-2">
            <About /> 
          </MOTION.div>

          <MOTION.div id="projects" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Projects />
          </MOTION.div>
          
          <MOTION.div id="skills" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="md:col-span-4">
            <Skills />
          </MOTION.div>

          <MOTION.div id="contact" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="md:col-span-4">
            <Contact />
          </MOTION.div>

        </div>

        <footer className="text-center text-gray-500 text-sm mt-20 pb-10">
          <p>© 2026 Devansh Tiwari. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;