import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../assets/HAYDEVS.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white py-1 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
            <img src={logo || "/placeholder.svg"} alt="HAYDEVS Logo" />
            </Link >
            <p className="text-white font-poppins text-base max-w-sm">
              Haydevs - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          {/* Contact info and social */}
          <div className="space-y-4 md:text-right">
            {/* Contact details */}
            <div className="space-y-2">
              <a 
                href="mailto:info@haydevs.com" 
                className="flex items-center justify-start md:justify-end text-white font-poppins text-base hover:text-[#8447E9] transition-colors"
              >
                <MdEmail className="h-5 w-5 mr-2" />
                info@haydevs.com
              </a>
              <a 
                href="tel:(001)1231234" 
                className="flex items-center justify-start md:justify-end text-white font-poppins text-base hover:text-[#8447E9] transition-colors"
              >
                <MdPhone className="h-4 w-4 mr-2 " />
                (001) 1231 4345
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 justify-start md:justify-end">
              <a href="#" className="text-white font-poppin text-base hover:text-[#8447E9] transition-colors">
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white font-poppin text-base hover:text-[#8447E9] transition-colors">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white font-poppin text-base hover:text-[#8447E9] transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white font-poppin text-base hover:text-[#8447E9] transition-colors">
                <FaDribbble className="h-5 w-5" />
                <span className="sr-only">Dribbble</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <li>
                <a href="#" className="text-white text-base font-poppins hover:text-[#8447E9] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-base font-poppins hover:text-[#8447E9] transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-base font-poppins hover:text-[#8447E9] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-base font-poppins hover:text-[#8447E9] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-base font-poppins hover:text-[#8447E9] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-white text-base font-poppins">
            © 2025 xAhmad - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

