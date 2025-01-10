import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';  // FontAwesome icons for social media
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['A Full Stack Developer', 'Open Source Contributor', 'A Problem Solver'],
    loop: true,
  })

  return (
    <div className="text-white h-screen flex flex-col justify-center items-center text-center  -mt-100">
      {/* Hero Text Section */}
      <h1 className="text-blue-500 text-4xl md:text-7xl font-bold mb-4">
        Hi, I am Kiran Pande
      </h1>
      {/* <h2 className="text-2xl md:text-4xl font-medium mb-6"> */}
      <span className='text-gray-800 text-4xl font-bold'>{text}<Cursor/></span>
      <p className="text-black flex justify-center text-base px-20xl md:text-lg mb-8" style={ {padding: '10px 80px'}}>
      I am a versatile web developer with hands-on experience in creating efficient front-end solutions using React.js and building scalable back-end systems with Node.js, Express.js, and MongoDB. I excel at delivering production-ready code and tackling challenges in dynamic, fast-paced settings.</p>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-blue-500" size="2x" />

        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" size="2x"/>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-500" size="2x"/>
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-500" size="2x"/>
        </a>
      </div>

      {/* Download Resume Section */}
      <div>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 border-2 border-blue-500 my-5 text-white font-semibold px-6 py-2 rounded-md w-64 text-center hover:bg-blue-600 hover:border-blue-600"
      > Download Resume
      </a>

      </div>
    </div>
  );
};

export default Hero;
