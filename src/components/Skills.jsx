import React from 'react';
import { Code2, Brain, Globe, Wrench } from 'lucide-react';
// Import Brand Icons
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiTensorflow, SiOpencv, SiPandas, SiScikitlearn, SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiVercel, SiPytorch, SiHuggingface, SiRedux, SiHtml5, SiCss3, SiFigma } from 'react-icons/si';
import { TbTargetArrow, TbBrain } from 'react-icons/tb'; 

const SkillCategory = ({ icon: Icon, title, skills, color }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30 group h-full">
    <div className="flex items-center gap-3 mb-5">
      <div className={`p-2 rounded-lg ${color} bg-opacity-20 text-white`}>
        <Icon size={20} className={color.replace('bg-', 'text-')} />
      </div>
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/5 border border-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default hover:scale-105 transform duration-200"
        >
          {/* Render the specific icon if it exists */}
          {skill.icon && <span className="text-lg opacity-80">{skill.icon}</span>}
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      
      {/* 1. Languages & Core */}
      <SkillCategory 
        icon={Code2}
        title="Languages" 
        color="bg-blue-500"
        skills={[
          { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
          { name: 'Java', icon: <FaJava className="text-red-400" /> },
          { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
          { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
          { name: 'SQL', icon: <SiMysql className="text-blue-300" /> },
          { name: 'HTML/CSS', icon: <SiHtml5 className="text-orange-500" /> }
        ]}
      />
      
      {/* 2. AI, ML & GenAI (Expanded) */}
      <SkillCategory 
        icon={Brain}
        title="AI & GenAI" 
        color="bg-purple-500"
        skills={[
          { name: 'YOLOv8', icon: <TbTargetArrow className="text-red-500" /> },
          { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
          { name: 'PyTorch', icon: <SiPytorch className="text-red-500" /> },
          { name: 'OpenCV', icon: <SiOpencv className="text-green-400" /> },
          { name: 'LLMs', icon: <TbBrain className="text-pink-400" /> },
          { name: 'Hugging Face', icon: <SiHuggingface className="text-yellow-400" /> },
          { name: 'Pandas', icon: <SiPandas className="text-white" /> }
        ]}
      />
      
      {/* 3. Full Stack Web */}
      <SkillCategory 
        icon={Globe}
        title="Web Stack" 
        color="bg-indigo-500"
        skills={[
          { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
          { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
          { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
          { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
          { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
          { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" /> }
        ]}
      />

      {/* 4. Tools & Design */}
      <SkillCategory 
        icon={Wrench}
        title="Tools" 
        color="bg-green-500"
        skills={[
          { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
          { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
          { name: 'Linux', icon: <FaLinux className="text-white" /> },
          { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
          { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
          { name: 'Vercel', icon: <SiVercel className="text-white" /> }
        ]}
      />
    </div>
  );
};

export default Skills;