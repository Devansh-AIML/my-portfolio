import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-center gap-6 md:gap-8 shadow-2xl">
        <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Skills</a>
        {/* Added Contact Link */}
        <a href="#contact" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;