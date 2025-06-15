import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center">
          <div className="w-6 h-5 flex lg:hidden flex-col justify-between items-center cursor-pointer" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span className="block w-full h-0.5 bg-gray-600"></span>
            <span className="block w-full h-0.5 bg-gray-600"></span>
            <span className="block w-full h-0.5 bg-gray-600"></span>
          </div>
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase" to="/">Home</NavLink>
          <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase" to="/products">Products</NavLink>
          <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase" to="/about">About</NavLink>
          <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase" to="/contact">Contact</NavLink>
        </div>
        <div className="flex-grow flex justify-center">
          <NavLink className="font-bold text-xl tracking-wide" to="/">LA COLLECTION</NavLink>
        </div>

        

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink to="/login" className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase">
              <i className="fa fa-sign-in mr-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
          </div>
          <NavLink to="/cart" className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase">
            <i className="fa fa-shopping-cart mr-1"></i> Cart ({state.length})
          </NavLink>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-sm py-2 px-4">
          <div className="flex flex-col space-y-2">
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/products" onClick={toggleMobileMenu}>Products</NavLink>
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/about" onClick={toggleMobileMenu}>About</NavLink>
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/login" onClick={toggleMobileMenu}>Login</NavLink>
            <NavLink className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-medium uppercase py-1" to="/register" onClick={toggleMobileMenu}>Register</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;