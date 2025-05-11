import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div>
      <nav className="bg-white w-full px-4 py-3">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">nullBrains<span className="text-indigo-600">.</span></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#" className="text-indigo-600">Home</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <FiSearch className="text-xl" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700">Sign In</button>
          <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-full">Sign Up</button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center">
          <a href="#" className="block text-indigo-600">Home</a>
          <a href="#" className="block">Features</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">Contact</a>
          <div className="flex justify-center mt-2">
            <FiSearch className="text-xl" />
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <button className="text-gray-700">Sign In</button>
            <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-full">Sign Up</button>
          </div>
        </div>
      )}
      
    </nav>
      <div className="border-t border-gray-200 w-full"></div>
  </div>
    
  );
}

export default Navbar;




