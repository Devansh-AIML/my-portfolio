import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. THE 3D ROLE ROTATOR COMPONENT ---
const RoleRotator = () => {
  const roles = [
    "Full Stack Developer",
    "AI & ML Engineer",
    "Python Expert",
    "Problem Solver"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000); // Rotates every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 md:h-20 overflow-hidden flex items-center mb-4 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateX: -90, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: -20 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300"
          style={{ perspective: 1000 }}
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- 2. MAIN HERO COMPONENT ---
const Hero = () => {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-500 group overflow-hidden relative">
      
      {/* Content */}
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
          Available for Hire
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Devansh</span>.
        </h1>

        {/* INSERTED 3D ROTATOR HERE */}
        <RoleRotator />

        <p className="text-gray-400 text-lg leading-relaxed mt-2">
          I build intelligent vision systems with <span className="text-white font-medium">YOLOv8</span> and scalable web apps with the <span className="text-white font-medium">MERN Stack</span>.
        </p>
      </div>
      
      {/* Footer of the card */}
      <div className="relative z-10 flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/5 items-center">
        {/* Fixed: Combined <button> and <a> into a single styled link for valid HTML */}
        <a 
          href="/resume.pdf" 
          download="Devansh_Tiwari_Resume.pdf" 
          className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Download CV
        </a>
        
        <div className="flex gap-2">
          <SocialBtn icon={<Github size={20} />} link="https://github.com/Devansh-AIML" />
          <SocialBtn icon={<Linkedin size={20} />} link="https://www.linkedin.com/in/devansh-tiwari-4a6ba6318/" />
          <SocialBtn icon={<Mail size={20} />} link="mailto:2k22.aiml.2212130@gmail.com" />
        </div>
      </div>

      {/* Optional: Subtle background glow for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
    </div>
  );
};

const SocialBtn = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-purple-400 hover:scale-110 transition-all border border-white/10">
    {icon}
  </a>
);

export default Hero;