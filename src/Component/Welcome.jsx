
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import photo from '/mePic.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Welcome = () => {
  const [menu, setMenu] = useState(false);
  const [animateNav, setAnimateNav] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/Home" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Projects", path: "/projects" },
    { id: 4, text: "Skills", path: "/skills" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  // Trigger Navbar Animation on Mount
  useEffect(() => {
    setAnimateNav(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-slate-600 text-white">
      {/* Animated Navbar */}
      <div
        className= {` bg-gradient-to-br from-slate-600 to-gray-900 max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 transform ${
          animateNav ? "translate-y-0" : "-translate-y-16"
        } transition-transform duration-700 ease-in-out`}
       >
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex space-x-2">
            <img src={photo} className="h-14 w-18 rounded-full" alt="Your Name" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Pratiksh
              <span className="text-blue-600 text-2xl">A</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Right Side for Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, path }) => (
              <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-2 text-xl">
              {navItems.map(({ id, text, path }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link to={path} onClick={() => setMenu(false)}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Welcome Content */}
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-indigo-500 animate-pulse">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Explore my projects, skills, and more.
        </p>
        <Link
          to="/Home"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
