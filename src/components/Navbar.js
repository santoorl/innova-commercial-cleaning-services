import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Innova Cleaning Logo"
            className="h-10 w-auto"
          />
          <span className="ml-3 text-gray-800 text-xl font-bold tracking-wide">
            Innova Cleaning
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:flex md:items-center md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center h-full md:h-auto space-y-6 md:space-y-0">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Reviews", path: "/reviews" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="text-center">
                <Link
                  to={item.path}
                  className={`block text-lg font-semibold transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-white underline"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
