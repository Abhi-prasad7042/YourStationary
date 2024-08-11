import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-8 border-t-[1px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center px-5">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-[#D388F8]">Your Store</h2>
            <p className="mb-2">123 Main Street, City, Country</p>
            <p className="mb-2">Email: info@yourstore.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Navigation Links */}
          <div className=" md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-[#D388F8]">Quick Links</h2>
            <ul className='text-center items-center leading-normal'>
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2 text-[#D388F8]">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-4">
          <p className="text-sm text-yellow-300">&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
