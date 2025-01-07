import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#" className="hover:text-gray-400">My Website</a>
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400 text-white">Home</a>
          <a href="#about" className="hover:text-gray-400 text-white">About</a>
          <a href="#services" className="hover:text-gray-400 text-white">Services</a>
          <a href="#contact" className="hover:text-gray-400 text-white">Contact</a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button id="menu-toggle" className="focus:outline-none text-white text-2xl" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-gray-700 ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block px-4 py-2 hover:bg-gray-600 text-white">Home</a>
        <a href="#about" className="block px-4 py-2 hover:bg-gray-600 text-white">About</a>
        <a href="#services" className="block px-4 py-2 hover:bg-gray-600 text-white">Services</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-gray-600 text-white">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
