import React, { useState } from 'react';
import photo from '/mePic.jpg';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import Toggle from './Toggle';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const location = useLocation(); // ✅ Fixed useLocation usage

    const navItems = [
        { id: 1, text: "Home", path: "/Home" },
        { id: 2, text: "About", path: "/About" },
        { id: 3, text: "Projects", path: "/Projects" },
        { id: 4, text: "Skills", path: "/Skills" },
        { id: 5, text: "Resume", path: "/Resume" }, // ✅ Removed extra space in path
        { id: 6, text: "Contact", path: "/Contact" },
    ];

    return (
        <div className='bg-slate-800 text-white max-w-screen-xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50'>
            <div className='flex justify-between items-center h-16'>
                {/* Left Side */}
                <div className='flex space-x-2'>
                    <img src={photo} className='h-14 w-18 rounded-full' alt='Profile' />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        Pratiksh
                        <span className='text-blue-600 text-2xl'>A</span>
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>

                {/* Right Side (Desktop) */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {navItems.map(({ id, text, path }) => (
                            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                                <Link to={path}>{text}</Link>
                            </li>
                        ))}
                    </ul>

                    <Toggle />


                    {/* Menu Button (Mobile) */}
                    <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                        {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className='md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl bg-slate-600'>
                    <ul>
                        {navItems.map(({ id, text, path }) => (
                            <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                                <Link to={path} onClick={() => setMenu(false)}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
}

export default Navbar;


