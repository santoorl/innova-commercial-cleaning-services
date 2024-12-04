import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    const newMenuState = !isOpen;
    setIsOpen(newMenuState);
    if (onMenuToggle) {
      onMenuToggle(newMenuState); // Notifica al componente padre
    }
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Innova Cleaning Logo"
            className="h-8 w-auto md:h-10"
          />
          <span className="ml-2 text-white text-lg md:text-xl font-bold">
            Innova Cleaning
          </span>
        </Link>

        {/* Botón de Menú Hamburger */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Menú */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center absolute md:static left-0 top-16 w-full md:w-auto bg-gray-800 md:bg-transparent z-10`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={handleMenuToggle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={handleMenuToggle}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={handleMenuToggle}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={handleMenuToggle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 text-gray-300 hover:text-white"
              onClick={handleMenuToggle}
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
