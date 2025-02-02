import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onMenuToggle(!isOpen); // Notifica al componente principal
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-gray-800"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 h-20 md:h-24 flex-row">
        {/* Logo y Slogan */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/services/llc6.png"
              alt="Innova Cleaning Logo"
              className="h-12 w-auto md:h-20"
            />
            <div className="flex flex-col ml-3">
              <span
                className={`text-lg md:text-2xl font-bold transition-colors ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                Innova Cleaning
              </span>
              {/* Slogan */}
              <span
                className={`text-xs md:text-lg italic transition-colors ${
                  scrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Cleaning excellence, every time!
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Reviews", path: "/reviews" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? scrolled
                      ? "text-blue-600"
                      : "text-white"
                    : scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center space-y-6 md:hidden">
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-white text-2xl"
            >
              <FaTimes />
            </button>
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Reviews", path: "/reviews" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-white text-lg font-semibold"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
