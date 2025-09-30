import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBell, FaShieldAlt, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  return (
    <nav className="bg-white shadow-lg py-4 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-6">
            <img className="h-12 w-12 mr-3" src={logo} alt="SafeSphere Logo" />
            <span className="text-blue-600 font-bold text-2xl">SafeSphere</span>
          </div>

          {/* Centered Menu + Report Button */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-lg">

            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">About</Link>

            {/* Report Button with Tooltip + Pulse */}
            <div className="relative group">
              <Link
                to="/report"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 animate-pulse"
              >
                Report Now
              </Link>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Your report is anonymous
              </span>
            </div>

            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Dashboard</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</Link>

          </div>

          {/* Right-side buttons */}
          <div className="flex items-center ml-6 space-x-4">

            {/* Secure Badge */}
            <div className="hidden md:flex items-center text-blue-600 font-medium text-sm">
              <FaShieldAlt className="mr-1" /> Secure
            </div>

            {/* Language Selector */}
            <select
              className="border rounded px-2 py-1 text-gray-700"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>EN</option>
              <option>HI</option>
            </select>

            {/* Notification Icon */}
            <div className="relative">
              <FaBell className="text-gray-500 h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
            </div>

            {/* Login button */}
            <Link
              to="/login"
              className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Login
            </Link>

            {/* Hamburger Menu for mobile */}
            <button
              className="md:hidden text-gray-700 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="h-6 w-6" />
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-center">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/report" className="block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">Report Now</Link>
            <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
