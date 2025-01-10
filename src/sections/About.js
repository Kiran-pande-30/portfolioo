import React from "react";
import image from "./21004063.jpg";

const About = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
            <img
              src={image}
              alt="Graduate placeholder"
              className="w-3/5 h-auto mx-auto md:mx-0"
            />
          </div>

          {/* Right Section: About Me Information */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4 text-center md:text-left">
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Hi everyone, Myself Kiran Pande from Indore, India. I am currently
              pursuing my Bachelor's Degree from Visvesvaraya National Institute
              of Technology, Nagpur
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

      <div className="bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Achievements
          </h2>
          <div className="container mx-auto px-4 py-4">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Google Summer of Code 2024
                </h3>
                <p className="text-gray-600 mb-6">
                  Worked on a product recommendation system focusing on
                  user-product interactions.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Presentation
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  GirlScript Summer of Code 2024
                </h3>
                <p className="text-gray-600 mb-6">
                  Contributed to GirlScript Summer of Code, improving project
                  functionalities and designs.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Presentation
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Smart India Hackathon 2024
                </h3>
                <p className="text-gray-600 mb-6">
                  Contributed to GirlScript Summer of Code, improving project
                  functionalities and designs.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Presentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
