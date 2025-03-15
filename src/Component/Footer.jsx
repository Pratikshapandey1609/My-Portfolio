import React from 'react';
import { ImLinkedin } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-full  w-full py-20 border-b-[1px] ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Thank You Message */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold underline ">
            Thank You for Visiting My Portfolio!
          </h2>
          <p className="text-gray-300 mt-2">
          Thank you for taking the time to explore my portfolio. 
          Your interest means a lot to me as a student passionate about learning and growing
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center underline space-x-6 mb-6">
            <ul className='flex space-x-3'>
                     <li>
                         <a href ="https://www.linkedin.com/in/pratiksha-pandey-147770276"
                         target='_blank'>
                         {<ImLinkedin className='text-2xl cursor-pointer' />}
                         </a>
                     </li>
                     <li>
                        <a href = "https://github.com/Pratikshapandey1609" target='_blank'>
                        {<GrGithub className='text-2xl cursor-pointer'/> }
                        </a>
                     </li>
                     <li>
                        <a href = "https://web.telegram.org/a/" target='_blank'>
                        { <SiTelegram className='text-2xl cursor-pointer'/>}
                        </a>
                    </li>
             </ul> 
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-8 text-gray-400 mb-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/projects" className="hover:text-white">Projects</a>
          <a href="/skills" className="hover:text-white">Skills</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Pratiksha Pandey . Designed with passion by a 3rd Year B.Tech Student. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
