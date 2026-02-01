import React from 'react';
import { User, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="md:col-span-1 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
            <User size={20} />
          </div>
          <h3 className="text-xl font-bold text-gray-100">About Me</h3>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Final year B.Tech student with a passion for solving complex problems. I bridge the gap between <span className="text-white font-medium">AI models</span> and <span className="text-white font-medium">user interfaces</span>.
        </p>
      </div>

      {/* Details List */}
      <div className="space-y-4">
        
        {/* Education Item */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
          <GraduationCap size={18} className="text-blue-400 mt-1" />
          <div>
            <h4 className="text-white text-sm font-semibold">Education</h4>
            <p className="text-xs text-gray-500">B.Tech AIML (Final Year)</p>
          </div>
        </div>

        {/* Interests Item (Personal Touch) */}
        <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
          <Heart size={18} className="text-red-400 mt-1" />
          <div>
            <h4 className="text-white text-sm font-semibold">Interests</h4>
            <p className="text-xs text-gray-500">Anime (Demon Slayer), Perfumery & Design</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;