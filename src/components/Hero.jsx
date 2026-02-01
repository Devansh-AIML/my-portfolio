import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-500 group">
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
          Available for Hire
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Devansh</span>.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          A <span className="text-white font-medium">B.Tech AIML Engineer</span> & <span className="text-white font-medium">Full Stack Developer</span>. 
          I build intelligent vision systems with YOLOv8 and scalable web apps with the MERN Stack.
        </p>
      </div>
      
      {/* Footer of the card */}
      <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/5">
        <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Download Resume
        </button>
        <div className="flex gap-2">
          <SocialBtn icon={<Github size={20} />} link="https://github.com/Devansh-AIML" />
          <SocialBtn icon={<Linkedin size={20} />} link="https://www.linkedin.com/in/devansh-tiwari-4a6ba6318/" />
          <SocialBtn icon={<Mail size={20} />} link="mailto:2k22.aiml.2212130@gmail.com" />
        </div>
      </div>
    </div>
  );
};

const SocialBtn = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-purple-400 hover:scale-110 transition-all border border-white/10">
    {icon}
  </a>
);

export default Hero;