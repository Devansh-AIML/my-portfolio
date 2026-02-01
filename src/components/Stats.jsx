import React from 'react';
import { Terminal, Cpu, Database, Code2 } from 'lucide-react';

const StatCard = ({ icon: Icon, title, subtitle, color }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
      {Icon && <Icon size={24} className={color.replace('bg-', 'text-')} />}
    </div>
    <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
  </div>
);

const Stats = () => {
  return (
    <>
      <StatCard 
        icon={Terminal} 
        title="Full Stack" 
        subtitle="MERN, Next.js" 
        color="bg-blue-500" 
      />
      <StatCard 
        icon={Cpu} 
        title="AI & ML" 
        subtitle="YOLOv8, OpenCV" 
        color="bg-purple-500" 
      />
    </>
  );
};

export default Stats;