import React from "react";
import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  const experiences = [
    // {
    //   id: 1,
    //   role: "Full-Stack Developer Intern",
    //   company: "XYZ Tech",
    //   duration: "Jan 2024 - Present",
    //   description: "Worked on MERN stack projects, optimized backend APIs, and enhanced UI with React.",
    // },
    // {
    //   id: 2,
    //   role: "Web Developer Intern",
    //   company: "ABC Solutions",
    //   duration: "Aug 2023 - Dec 2023",
    //   description: "Developed responsive websites, implemented RESTful APIs, and worked with MongoDB.",
    // },
  ];

  const education = {
    degree: "B.Tech in Computer Science",
    university: "Shri Ram Institute of Science & Technology",
    duration: "2022 - 2026",
    coursework: [
      "Web Development",
      "Data Structures & Algorithms",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
  };

  const skills = [
    { name: "React.js", level: "80%" },
    { name: "Node.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Tailwind CSS", level: "75%" },
    { name: "JavaScript (ES6+)", level: "70%" },
    { name: "Java", level: "70%" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-700 m-12">My Resume</h1>

      {/* Experience Section */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><FaBriefcase className="mr-2" /> Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-4">
            <h3 className="text-lg font-semibold">{exp.role} - <span className="text-indigo-400">{exp.company}</span></h3>
            <p className="text-gray-300">{exp.duration}</p>
            <p className="text-gray-400 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><FaGraduationCap className="mr-2" /> Education</h2>
        <h3 className="text-lg font-semibold">{education.degree}</h3>
        <p className="text-gray-300">{education.university} ({education.duration})</p>
        <p className="text-gray-400 mt-2"><b>Relevant Coursework:</b> {education.coursework.join(", ")}</p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="bg-gray-600 h-2 rounded-full">
              <div className="bg-indigo-400 h-2 rounded-full" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Download Resume Button */}
      <div className="text-center">
        <a href="/Pratiksha_Resume.pdf" download className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-6 rounded-full flex items-center justify-center w-48 mx-auto">
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
