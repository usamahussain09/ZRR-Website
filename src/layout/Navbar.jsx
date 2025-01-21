import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import logo from '../assets/HAYDEVS.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="inline-block">
            <img src={logo || "/placeholder.svg"} alt="HAYDEVS Logo" />
            </Link >

        {/* Desktop Menu */} 
        <ul className="hidden md:flex justify-center items-center space-x-8 text-sm">
          <li className="text-base font-grotesk flex items-center space-x-1 hover:text-[#8447E9]">
            <Link to="/">. Home</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-[#8447E9]">
            <Link to="/mywork">. My Work</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-[#8447E9]">
            <Link to="/services">. Services</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-[#8447E9]">
            <Link to="/about">. About</Link>
          </li>
        </ul>

        {/* "Let's Talk" Button */}
        <div className="hidden md:flex">
        <Link to="/Contact" className="flex items-center px-4 py-1 gap-2 hover:text-[#8447E9] transition hover:border-[#8447E9]">
          <span className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:border-[#8447E9]">
            <MdEmail />
          </span>
          <span className="mr-2 font-grotesk text-base">Let's Talk</span>
        </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 min-h-screen bg-black text-white w-64 p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="mb-4 text-right">
          <FiX size={24} />
        </button>
        <ul className="space-y-6 text-lg">
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-gray-400">
            <Link to="/" onClick={toggleMenu}>. Home</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-gray-400">
            <Link to="/mywork" onClick={toggleMenu}>. My Work</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-gray-400">
            <Link to="/services" onClick={toggleMenu}>. Services</Link>
          </li>
          <li className="font-grotesk text-base flex items-center space-x-1 hover:text-gray-400">
            <Link to="/about" onClick={toggleMenu}>.About</Link>
          </li>
          <li>
          <button className="flex items-center  px-1 py-1 gap-2 hover:bg-white hover:text-black transition">
            <span className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <MdEmail />
            </span>
            <span className="mr-2 font-grotesk text-base">Let's Talk</span>
          </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

