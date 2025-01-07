import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';  // FontAwesome icons for social media

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex flex-col justify-center items-center text-center text-white">
      {/* Hero Text Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I am Kiran Pande</h1>
      <h2 className="text-2xl md:text-4xl font-medium mb-6">Full Stack Developer</h2>
      <p className="text-base md:text-lg max-w-md mb-8">
        Passionate about building innovative digital solutions and solving complex problems with clean, efficient code.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-gray-300" />
        </a>
      </div>

      {/* Download Resume Section */}
      <div>
        <a
          href="/resume.pdf"
          download
          className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-500"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
