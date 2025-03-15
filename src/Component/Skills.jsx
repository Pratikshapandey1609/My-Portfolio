import React from 'react'
import css from '/css.jpg'
import express from '/express.png'
import html from '/html.png'
import java from '/java.png'
import javaScript from '/javascript.png'
import mongodb from '/mongodb.jpg'
import react from '/reactjs.png'
import node from '/node.png';
import taildwind from '/taildwind.jpg'

function Skills() {
  return (
    <div className=' max-w-screen-2xl h-full w-full w-full border-b-black  border-b-[1px] container mx-auto  px-4  md:px-20 my-16'>
        <div className='font-5xl font-bold mb-5 text-4xl'>
            <h1 className='flex justify-center items-center m-2 p-4 font-bold text-indigo-900'> Skills </h1>
            <h1 className='font-seminold text-lg '>🌟 I’m Proficient in Technologies That Build the Future! 🌟  
          <br />
            With hands-on experience, I specialize in creating scalable, efficient, and modern applications.
          </h1>
        </div>
        {/**Skills Images */}
        <div className=''>
            <h1 className='underline  text-lg font-semibold '> Programming Languages</h1>
           <div className= 'flex grid grid-cols-2 md:grid-cols-5 gap-7 my-3 items-center justify-center rounded-full  justif-center space-x-8'>
             <img src={java} className = ' border-[2px] shadow-sm flex rounded-full md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer' alt = ""/>
             <img src={javaScript} className='border-[2px] shadow-sm flex rounded-full md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer' alt = ""/>
           </div>

           <div  className=''>
             <h1 className='underline  text-lg font-semibold p-4'>Frontend Development</h1>
            <div className='flex rounded-full grid grid-cols-2 md:grid-cols-5 gap-5 my-3  items-center justify-center space-x-12'>
              <img src={html}  className=' border-[2px] shadow-sm flex rounded-full  md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer' alt = ""/>
              <img src={css} className=' border-[2px] shadow-sm flex rounded-full  md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer'  alt = ""/>
              <img src={react} className=' border-[2px] shadow-sm flex rounded-full md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer'  alt = ""/>
              <img src={taildwind} className='border-[2px] shadow-sm flex rounded-full md:w-[200px] md:h-[200px] justif-center hover:scale-105 duration-200 cursor-pointer'  alt = ""/>
             </div>
           </div>

           <div>
             <h1 className='underline  text-lg font-semibold p-4'>Backend Development</h1>
             <div className='flex p-1 grid grid-cols-2 md:grid-cols-5 gap-5 my-3 items-center justify-center rounded-full justif-center space-x-12 '>
               <img src={node}  className=' md:w-[200px] md:h-[200px] border-[2px] shadow-sm flex border-black-2 shadow-sm rounded-full  justif-center hover:scale-105 duration-200 cursor-pointer' alt = ""/>
               <img src={mongodb} className='md:w-[200px] md:h-[200px] border-[2px] shadow-sm flex rounded-full justif-center hover:scale-105 duration-200 cursor-pointer'  alt = ""/>
               <img src={express}  className=' md:w-[200px] md:h-[200px] border-[2px] shadow-sm flex rounded-full  justif-center hover:scale-105 duration-200 cursor-pointer' alt = ""/>
             </div>
           </div>
        </div>
    </div>
  )
} 


export default Skills;
