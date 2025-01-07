import React from 'react';

const Skills = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

        {/* Grid Layout for Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Skill 1: HTML */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">HTML</h3>
          </div>
          
          {/* Skill 2: CSS */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">CSS</h3>
          </div>
          
          {/* Skill 3: JavaScript */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">JavaScript</h3>
          </div>
          
          {/* Skill 4: MongoDB */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">MongoDB</h3>
          </div>
          
          {/* Skill 5: Tailwind CSS */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Tailwind CSS</h3>
          </div>

          {/* Skill 6: React */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">React</h3>
          </div>

          {/* Skill 7: Node.js */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Node.js</h3>
          </div>

          {/* Skill 8: Express */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Express</h3>
          </div>

          {/* Skill 9: Git */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Git</h3>
          </div>

          {/* Skill 10: GitHub */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-800">GitHub</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
