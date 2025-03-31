import React from 'react';
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  return (
    <nav className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white tracking-wide hover:text-yellow-400 transition duration-300">
          Asma Iqbal
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-lg font-medium">
          {["Home", "About", "Projects", "Skills", "Contacts"].map((item) => (
            <li key={item} className="relative group">
              <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-yellow-400 transition duration-300">
                {item}
              </a>
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <MdOutlineMenu className="md:hidden text-white cursor-pointer hover:text-yellow-400 transition duration-300" size={32} />
      </div>
    </nav>
  );
}

export default Navbar;
