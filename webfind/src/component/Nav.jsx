import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserTie, FaUser } from "react-icons/fa"; 

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/companies", label: "Companies" },
    { to: "/community", label: "Community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        
        {/* Logo */}
        <div className="text-xl font-medium cursor-pointer">
          <span className="text-sky-800">Web</span>
          <span className="text-green-600">find</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={() => setActiveLink(link.to)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 
                        after:h-0.5 after:w-0 hover:after:w-full after:bg-green-600 after:transition-all 
                        ${
                          activeLink === link.to
                            ? "text-green-600 after:w-full"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative dropdown">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-2xl active:scale-[.98] active:duration-75 transition-all 
                        hover:scale-[1.01] ease-in-out bg-green-100 hover:bg-green-200 text-md font-bold"
            >
              Create an account
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 bg-transparent rounded-lg shadow-lg w-48 flex flex-col py-2">
                <Link
                  to="/employerregister"
                  className="flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-2xl hover:bg-green-100 transition-all"
                >
                  <FaUserTie className="mr-2" />
                  As Employer
                </Link>
                <Link
                  to="/register"
                  className="flex mt-2 font-semibold items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-2xl  hover:bg-green-100 transition-all"
                >
                  <FaUser className="mr-2" />
                  As Employee
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="p-2 rounded-2xl active:scale-[.98] active:duration-75 transition-all 
                      hover:scale-[1.01] ease-in-out bg-green-300 hover:bg-green-400 text-md font-bold"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={() => {
                setActiveLink(link.to);
                setIsMenuOpen(false);
              }}
              className={`text-lg font-medium ${
                activeLink === link.to ? "text-green-600" : "text-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Register & Login Buttons */}
          <div className="relative dropdown">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-xl bg-green-200 text-md font-bold"
            >
              Create an account
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 flex flex-col py-2">
                <Link
                  to="/register/employer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-100 transition-all"
                >
                  <FaUserTie className="mr-2 text-green-600" />
                  As Employer
                </Link>
                <Link
                  to="/register/employee"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-100 transition-all"
                >
                  <FaUser className="mr-2 text-green-600" />
                  As Employee
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="p-2 rounded-xl bg-green-400 text-md font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>

    
  );
};

export default Nav;
