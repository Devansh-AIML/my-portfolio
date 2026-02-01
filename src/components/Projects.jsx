import React from 'react';
import { ExternalLink, Github, Video, Lock, Utensils, Eye, Mic } from 'lucide-react';

const ProjectCard = ({ title, subtitle, tags, link, image, children }) => (
  <div className="md:col-span-2 rounded-3xl overflow-hidden group relative min-h-[350px] flex flex-col border border-white/10 shadow-2xl">
    
    {/* 1. BACKGROUND IMAGE */}
    <div className="absolute inset-0 z-0">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" 
        />
        {/* Dark Gradient Overlay - Stronger at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>

    {/* 2. HOVER EFFECT (Darkens background further when hovered) */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10"></div>
    
    {/* 3. CONTENT AREA */}
    <div className="relative z-20 flex-grow p-8 flex flex-col justify-end mt-auto h-full">
      
      {/* Floating Icon Badge (Top Right) */}
      <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 shadow-lg">
         {children}
      </div>

      {/* Tags (Slide up on hover) */}
      <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
        {tags.map((tag, i) => (
           <span key={i} className="text-xs font-bold px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-white border border-white/10 shadow-sm uppercase tracking-wide">
             {tag}
           </span>
        ))}
      </div>
      
      {/* Title & Subtitle */}
      <div className="flex justify-between items-end">
        <div className="max-w-[85%]">
            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
                {title} 
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed drop-shadow-md line-clamp-2 group-hover:line-clamp-none transition-all">
                {subtitle}
            </p>
        </div>
        
        {/* Action Buttons (Slide up on hover) */}
        <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <a href={link} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-cyan-500/50">
                <Github size={20} />
            </a>
            <button className="p-3 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors shadow-lg">
                <ExternalLink size={20} />
            </button>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      {/* 1. Vehicle Detection */}
      <ProjectCard 
        title="Vehicle Detection" 
        subtitle="Real-time traffic analysis & counting using YOLOv8 and OpenCV on CCTV footage."
        tags={['YOLOv8', 'Python', 'OpenCV']}
        link="https://github.com/Devansh-AIML/Vehicle_detection"
        image="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=800&q=80"
      >
        <Video className="text-white" size={24} />
      </ProjectCard>

      {/* 2. Real-Time Chat App */}
      <ProjectCard 
        title="Real-Time Chat App" 
        subtitle="Scalable messaging platform with live socket connections and JWT auth."
        tags={['MERN Stack', 'Socket.io', 'Tailwind']}
        link="https://github.com/Devansh-AIML"
        image="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80"
      >
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
      </ProjectCard>

      {/* 3. Secure Notes App */}
      <ProjectCard 
        title="Secure Notes App" 
        subtitle="Encrypted note-taking platform focusing on data privacy and secure authentication."
        tags={['Encryption', 'React', 'Security']}
        link="https://github.com/Devansh-AIML"
        image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
      >
        <Lock className="text-emerald-400" size={24} />
      </ProjectCard>

      {/* 4. Recipe Recommender */}
      <ProjectCard 
        title="Recipe Recommender" 
        subtitle="Personalized food suggestion engine using content-based filtering algorithms."
        tags={['Machine Learning', 'Pandas', 'Python']}
        link="https://github.com/Devansh-AIML"
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
      >
         <Utensils className="text-orange-400" size={24} />
      </ProjectCard>

      {/* 5. Anti-Sleep Alarm */}
      <ProjectCard 
        title="Anti-Sleep Alarm" 
        subtitle="Driver safety system detecting drowsiness via Eye Aspect Ratio (EAR) analysis."
        tags={['Python', 'Dlib', 'IoT']}
        link="https://github.com/Devansh-AIML"
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
      >
        <Eye className="text-red-400" size={24} />
      </ProjectCard>

      {/* 6. Jarvis AI Assistant */}
      <ProjectCard 
        title="Jarvis AI Assistant" 
        subtitle="Voice-activated automation tool for system control and LLM queries."
        tags={['NLP', 'Generative AI', 'Automation']}
        link="https://github.com/Devansh-AIML"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      >
        <Mic className="text-cyan-400" size={24} />
      </ProjectCard>
    </>
  );
};

export default Projects;