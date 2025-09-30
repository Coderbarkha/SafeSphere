import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBell, FaMoon, FaSun, FaBars } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg py-4 rounded-b-2xl transition duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img className="h-12 w-12" src={logo} alt="SafeSphere Logo" />
            <span className="text-blue-600 dark:text-blue-400 font-extrabold text-xl tracking-wide">
              SafeSphere
            </span>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8 text-base font-medium">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">About</Link>

            {/* Report Button */}
            <Link
              to="/report"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300"
            >
              Report Now
            </Link>

            <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Dashboard</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-5">
            
            {/* Notification Bell */}
            <div className="relative cursor-pointer">
              <FaBell className="text-gray-600 dark:text-gray-300 h-6 w-6 hover:text-blue-500 transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-110 transition"
            >
              {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

            {/* Language Selector */}
            <select
              className="bg-gray-100 dark:bg-gray-800 border rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>EN</option>
              <option>HI</option>
            </select>

            {/* Login Button */}
            <Link
              to="/login"
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300 shadow-sm"
            >
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 text-center pb-3">
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">About</Link>
            <Link to="/report" className="block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Report Now</Link>
            <Link to="/dashboard" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Dashboard</Link>
            <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
            <Link to="/login" className="block border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
