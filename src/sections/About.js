import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBasketballBall } from '@fortawesome/free-solid-svg-icons'; // Example icons, you can choose any

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Left Section: Icon */}
          <div className="w-1/2 text-center md:text-left mb-8 md:mb-0">
            <FontAwesomeIcon 
              icon={faUserGraduate} // Example Icon for education
              className="text-blue-500 text-6xl mb-4"
            />
          </div>

          {/* Right Section: About Me Information */}
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Currently, I am pursuing my Bachelor's degree in Computer Science at Visvesvaraya National Institute of Technology, Nagpur.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Hobbies</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming and Problem Solving</li>
              <li>Playing Basketball</li>
              <li>Reading Tech Articles and Blogs</li>
              <li>Travelling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Achievements</h2>
    
    {/* Achievements Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
      
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart India Hackathon 2022</h3>
        <p className="text-gray-600 mb-6">Participated and developed a real-time workshop-sharing platform for national institutes.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Code</a>
          <a href="#" className="text-blue-500 hover:underline">Presentation</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Google Summer of Code 2024</h3>
        <p className="text-gray-600 mb-6">Worked on a product recommendation system focusing on user-product interactions.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Code</a>
          <a href="#" className="text-blue-500 hover:underline">Presentation</a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Smart India Hackathon 2024</h3>
        <p className="text-gray-600 mb-6">Contributed to GirlScript Summer of Code, improving project functionalities and designs.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Code</a>
          <a href="#" className="text-blue-500 hover:underline">Presentation</a>
        </div>
      </div>
      
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
