import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "2k22.aiml.2212130@gmail.com"; // REPLACE THIS WITH YOUR REAL EMAIL

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 group">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>

      {/* Left Side: Text */}
      <div className="relative z-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">amazing?</span>
        </h2>
        <p className="text-indigo-200 text-lg mb-6">
          Whether you have a question, a project idea, or just want to say hi, I’m always open to new opportunities.
        </p>
        
        {/* Email Copy Box */}
        <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-full p-2 pl-6 w-fit mx-auto md:mx-0 backdrop-blur-md hover:bg-white/15 transition-colors">
          <span className="text-gray-300 text-sm font-medium hidden sm:block">{email}</span>
          <button 
            onClick={handleCopy}
            className="p-2 bg-white text-indigo-900 rounded-full hover:scale-105 transition-transform flex items-center gap-2 font-bold px-4"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Right Side: Social Actions */}
      <div className="flex flex-col gap-4 relative z-10 w-full md:w-auto">
        <a 
            href="mailto:2k22.aiml.2212130@gmail.com" 
            className="bg-white text-indigo-950 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
            <Mail size={20} /> Send Email
        </a>

        <div className="flex gap-4 justify-center">
            <SocialLink icon={Github} link="https://github.com/Devansh-AIML" label="GitHub" />
            <SocialLink icon={Linkedin} link="https://www.linkedin.com/in/devansh-tiwari-4a6ba6318/" label="LinkedIn" />
        </div>
      </div>

    </div>
  );
};

const SocialLink = ({ icon: Icon, link, label }) => (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all group"
    >
      <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
      <span className="text-xs text-gray-500 group-hover:text-gray-300">{label}</span>
    </a>
);

export default Contact;