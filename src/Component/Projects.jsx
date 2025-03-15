import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Quotes Genrator ',
      description: 'A dynamic Quote Generator built with JavaScript, HTML, and CSS, leveraging APIs to fetch and display inspiring quotes. It features a user-friendly interface for sharing or generating new quotes seamlessly..',
      techStack: 'html, css , javaScript, API  ',
      githubLink: 'https://github.com/Pratikshapandey1609/Quotes',
      demoLink: 'https://bejewelled-mooncake-4690d1.netlify.app/',
    },
    {
      title: 'Notebook Web-App ',
      description: 'A dynamic Notes Web App built with advanced JavaScript, utilizing local storage for saving and managing notes. It offers a responsive interface for users to create, edit, and store notes seamlessly.',
      techStack: 'JS , local Storage , API ',
      githubLink: 'https://github.com/Pratikshapandey1609/Notes-Webpage',
      demoLink: 'https://cheery-vacherin-328ff9.netlify.app/',
    },
    {
      title: 'Todo List Web-Page ',
      description: 'A To-Do List Web App designed to help users manage tasks efficiently. Built with HTML, CSS, and JavaScript, it includes features like adding, editing, and deleting tasks, with local storage integration to retain tasks across sessions.',
      techStack: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/Pratikshapandey1609/Todo-list-webpage-',
      demoLink: 'https://mellifluous-treacle-96d9c5.netlify.app/',
    },

    {
      title: 'Weather Web-App ',
      description: 'A Weather App built with HTML and JavaScript that allows users to fetch and display real-time weather information for any city using API integration. It features a clean interface for enhanced user experience.',
      techStack: 'html , css , javaScript',
      githubLink: 'https://github.com/Pratikshapandey1609/WeatherApp',
      demoLink : 'https://beautiful-fudge-48f94e.netlify.app/', 
    },
    {
      title: 'Login-SignUp',
      description: 'A Login-SignUp web application built using React, React Router, and Tailwind CSS. It provides seamless navigation between login and signup pages with a modern, responsive design and user-friendly interface..',
      techStack: 'Rect , Taildwind , Router',
      githubLink: 'https://github.com/Pratikshapandey1609/Login-SignUP',
      demoLink: 'https://project2-live.com',
    },
    {
      title: 'QrCode Generator ',
      description: 'A QR Code Generator web application developed using JavaScript and APIs. It allows users to generate custom QR codes instantly, offering a simple and efficient way to encode text or URLs into scannable QR formats..',
      techStack: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/Pratikshapandey1609/QrCode-Generator',
      demoLink: 'https://cerulean-tiramisu-0ce382.netlify.app/',
    },

    {
      title: 'file Sharing',
      description: 'A real-time file-sharing web app enabling users to upload, share, and manage files securely with instant access and efficient tracking. Built with modern web technologies for speed and reliability.',
      techStack: 'React, Node.js, MongoDB',
      githubLink: 'https://github.com/Pratikshapandey1609/FILE-SHARING-WEBAPP1',
      demoLink: 'https://project1-live.com',
    },
    {
      title: 'Real Time Tracker',
      description: 'A web app for real-time location tracking with an interactive map interface, built using modern web technologies.',
      techStack: 'Vue.js, Express, MySQL',
      githubLink: 'https://github.com/Pratikshapandey1609/REALTIMETRACKER12',
      demoLink: 'https://project2-live.com',
    },
    {
      title: 'Project 9',
      description: 'A brief description of the third project.',
      techStack: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/username/project3',
      demoLink: 'https://project3-live.com',
    },
  ];

  return (
    <div className="container mx-auto p-8 w-full py-5 max-w-screen-2xl border-b-black border-b-[1px] container mx-auto px-4 mt-16 md:px-20 my-20 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-900">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

