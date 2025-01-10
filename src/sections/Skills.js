import React from 'react';
import { 
  FaHtml5,       // HTML
  FaCss3Alt,     // CSS
  FaJsSquare,    // JavaScript
  FaReact,       // React
  FaNodeJs,      // Node.js 
  FaGithub,      // GitHub
  FaGitAlt,
  FaPython,
  FaCode       
} from 'react-icons/fa';  // FontAwesome icons for various skills

import { DiDatabase } from 'react-icons/di'; // MongoDB
import { SiCplusplus } from 'react-icons/si'; // C++
import { SiTailwindcss } from 'react-icons/si';

const SkillCard = ({ icon: Icon, title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4">
    <Icon size={50} className="text-blue-600" />
    <h3 className="text-lg font-medium text-gray-800 text-center">{title}</h3>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: FaHtml5, title: 'HTML' },
    { icon: FaCss3Alt, title: 'CSS' },
    { icon: FaJsSquare, title: 'JavaScript' },
    { icon: SiCplusplus, title: 'C++' },
    { icon: FaReact, title: 'React' },
    { icon: FaNodeJs, title: 'Node.js' },
    { icon: DiDatabase, title: 'MongoDB' },
    { icon: FaGithub, title: 'GitHub' },
    { icon: FaGitAlt, title: 'Git' },
    { icon: SiTailwindcss, title: 'Tailwind' },
    { icon: FaPython, title: 'Python' },
    { icon: FaCode, title: 'Data Structure' }
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to build software solutions
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
