
import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink, demoLink }) => {
  return (
    <div className=" w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col 
      bg-gratient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
      hover:from-gray-600 hover:gray-700 transition-colors duration-1000 p-6 rounded-lg shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Technologies:</span> {techStack}
      </p>
      <div className="flex space-x-4">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            GitHub
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
