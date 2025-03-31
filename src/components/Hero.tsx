import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-gray-900 text-white flex flex-col relative overflow-hidden"
    >
      <Navbar />

      {/* Background Gradients for Stylish Look */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse -bottom-10 -right-10"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-60px)] px-6 relative z-10">
        
        {/* Left Side - Profile Picture */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-yellow-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="w-56 h-56 lg:w-72 lg:h-72 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/Asma.png"
                alt="Asma Iqbal"
                width={288}
                height={288}
                priority
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10 text-center lg:text-left">
          {/* Name in One Line */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide">
            I'm <span className="text-yellow-400">Asma Iqbal</span>
          </h1>

          {/* Profession / Specialization */}
          <p className="text-lg sm:text-xl font-semibold text-gray-300 mt-2">
            AI Engineer | Full Stack Developer
          </p>

          {/* Short Description */}
          <p className="text-md text-gray-400 mt-4 max-w-lg">
            Passionate AI Engineer and Full Stack Developer, crafting intelligent solutions and innovative web experiences.
          </p>

          {/* Call to Action Button */}
          <a href="#projects">
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-lg rounded-full hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50">
              View My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

