// import React from 'react'
// import { ImLinkedin } from "react-icons/im";
// import { GrGithub } from "react-icons/gr";
// import { SiTelegram } from "react-icons/si";

// import { DiMongodb } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { RiReactjsLine } from "react-icons/ri";
// import { ReactTyped} from "react-typed";

// import photo from  '/mePic.jpg';

// function Home() {
//   return (
//     <>
//       <div className=' w-full border-b-black   border-b-[1px] bg-slate-600 bg-gradient-to-br from-slate-600 to-gray-800  max-w-screen-2xl h-full container mx-auto px-4 md:px-20 my-10'>
//         <div className='flex flex-col md:flex-row h-full'>
//             <div className='md-w-1/2 mt-12 md:mt-24 space-y-1 order-2 md:order-1'>
//                 <span className='text-xl '>Welcome! Here's My Journey in Pixels..</span>
//                 <div className='flex space-x-1 text-2xl md:text-4xl '> 
//                 <h1>Hello, I'm a </h1>
//                 {/*<span className='text-red-900 font-bold'>Developer</span>*/}
//                 <ReactTyped
//                     strings={["Developer", "Programmer", "Coder"]}
//                     typeSpeed={40}
//                     backSpeed={50}
//                     loop={true}
//                     className="text-red-700"
//                 />
//                 </div>
//                 <br/>
//                 <p className='text-md md:text-md text-justify '> 
//                   As a B.Tech Computer Science student, my passion for coding knows no bounds.<br/>
//                   I'm dedicated to crafting sleek, efficient, and innovative solutions in the digital realm..<br/>
//                   My journey encompasses learning and mastering various programming languages,.<br/>
//                   tackling complex algorithms,and staying ahead with the latest tech trends..<br/> 
//                   Dive in and explore the projects that showcase my growth, creativity,<br/>
//                   and relentless drive to make technology work for everyone.
//                 </p>
//             {/***social and skills  */}
//             <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
//                  {/***social media icons*/}
//                 <div className='space-y-2 '>
//                 <h1 className='font-bold '>Available on </h1>
//                     <ul className='flex space-x-3'>
//                         <li>
//                             <a href ="https://www.linkedin.com/in/pratiksha-pandey-147770276"
//                             target='_blank'>
//                             { <ImLinkedin className='text-2xl cursor-pointer' />}
//                             </a>
//                         </li>
//                         <li>
//                             <a href = "https://github.com/Pratikshapandey1609" target='_blank'>
//                             { <GrGithub className='text-2xl cursor-pointer'/> }
//                             </a>
//                         </li>
//                         <li>
//                             <a href = "https://web.telegram.org/a/" target='_blank'>
//                             { <SiTelegram className='text-2xl cursor-pointer'/>}
//                             </a>
//                         </li>
//                     </ul> 
//                 </div>
//                 {/**Skills*/}
//                 <div className=' space-y-2'>
//                   <h1 className='font-bold '>Currently Working On</h1>
//                  <div className='flex space-x-3'>
//                      <DiMongodb className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px] '/>
//                      <FaNodeJs className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
//                      <RiReactjsLine className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
//                      <SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
//                  </div> 
            
//                 </div>
//              </div>
//             </div>
            
//             {/** div Profile photo */}
//             <div className='md-w-1/2 md:ml-48 md:mt-20 mt-8 mb-8 order-1'>
//                 <img src={photo} className = "rounded-full md:w-[450px] h-[450px]" alt = ""/>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home;



import React from "react";
import { ImLinkedin } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import photo from "/mePic.jpg";
import Toggle from "./Toggle";

const Home = () => {
  return (
    <div className="w-full mt-6 h-screen bg-gradient-to-br bg-gray- to-black text flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hello, I'm a{" "}
          <ReactTyped
            strings={["Developer", "Programmer", "MERN Stack Engineer"]}
            typeSpeed={50}
            backSpeed={50}
            loop
            className="text-blue-800"
          />
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          A passionate B.Tech Computer Science student who thrives on coding and problem-solving.
          I specialize in building efficient and elegant web solutions with modern technologies.
        </p>

        {/* Social Media */}
        <div className="mt-6 flex space-x-6 justify-center md:justify-start">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <ImLinkedin size={28} className="hover:text-blue-400 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GrGithub size={28} className="hover:text-gray-400 transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <SiTelegram size={28} className="hover:text-blue-300 transition-transform duration-200 hover:scale-110" />
          </a>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Tech Stack</h2>
          <div className="flex space-x-6 mt-3">
            <DiMongodb className="text-4xl hover:scale-110 transition-transform duration-200" />
            <FaNodeJs className="text-4xl hover:scale-110 transition-transform duration-200" />
            <RiReactjsLine className="text-4xl hover:scale-110 transition-transform duration-200" />
            <SiExpress className="text-4xl hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={photo}
          className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-blue-800 shadow-xl transition-transform duration-300 hover:scale-105"
          alt="Profile"
        />
      </div>
         
    </div>
  );
};

export default Home;
