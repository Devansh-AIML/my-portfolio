import React from 'react';
import { Terminal, Cpu, Code2 } from 'lucide-react';

const StatCard = ({ icon: Icon, title, subtitle, color }) => (
  // CHANGED: Reduced 'min-h-[160px]' -> 'min-h-[130px]' for a very compact look
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col justify-center items-center text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group w-full flex-1 min-h-[130px]">
    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-3 ${color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
      {Icon && <Icon size={20} className={color.replace('bg-', 'text-')} />}
    </div>
    <h3 className="text-lg font-bold text-gray-100">{title}</h3>
    <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
  </div>
);

const Stats = () => {
  return (
    <>
      {/* 1. Full Stack */}
      <StatCard 
        icon={Terminal} 
        title="Full Stack" 
        subtitle="MERN, Next.js" 
        color="bg-blue-500" 
      />

      {/* 2. AI & ML */}
      <StatCard 
        icon={Cpu} 
        title="AI & ML" 
        subtitle="YOLOv8, OpenCV" 
        color="bg-purple-500" 
      />

      {/* 3. Python Expert */}
      <StatCard 
        icon={Code2} 
        title="Python Expert" 
        subtitle="Pandas, PyTorch" 
        color="bg-yellow-500" 
      />
    </>
  );
};

export default Stats;