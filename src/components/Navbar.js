import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-white text-2xl font-bold">
          Innova Cleaning
        </Link>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center absolute md:static left-0 top-16 w-full md:w-auto bg-gray-800 md:bg-transparent z-10`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
