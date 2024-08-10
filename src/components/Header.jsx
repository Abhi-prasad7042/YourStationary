import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-10">
      {/* Navbar */}
      <div className="flex justify-between items-center px-2 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src="/logo.gif" alt="Store Logo" className="w-12 h-12" />
          <div className="text-2xl font-bold text-[#FFEF20]">Your Store</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white">Log in</button>
          <button className="bg-[#FFEF20] text-black py-2 px-4 rounded hover:bg-green-600">Sign up</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <button className="block w-full text-left py-2">Log in</button>
          <button className="block w-full bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600">Sign up</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
