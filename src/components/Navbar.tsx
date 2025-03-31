"use client";
import React, { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="container mx-auto py-6 px-4 fixed top-0 left-0 w-full bg-gray-900 z-50">
      <div className="flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white tracking-wide hover:text-yellow-400 transition duration-300">
          Asma Iqbal
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {item.label}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white cursor-pointer hover:text-yellow-400 transition duration-300"
        >
          {isMenuOpen ? <MdClose size={32} /> : <MdOutlineMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-900 text-white shadow-lg py-4 z-50">
          <ul className="flex flex-col items-center gap-4 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-4 hover:text-yellow-400 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
