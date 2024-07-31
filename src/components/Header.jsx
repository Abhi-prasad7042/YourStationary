import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { LOGO_URL } from '../utils/constant';
import './Header.css'; // Import the custom CSS file

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <img src={LOGO_URL} alt="Logo" className="h-10" />
          <p className="text-xl font-bold">Your Store</p>
        </div>
        <div className="hidden md:flex flex-grow justify-center space-x-8 mr-16">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaShoppingCart className="text-2xl mr-4" />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block py-2 px-4 hover:bg-gray-700">Home</a>
          <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Header;
