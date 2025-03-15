import React from "react";

function About() {
  return (
    <div className=" w-full border-b border-gray-800 max-w-screen-2xl container mx-auto px-6 md:px-20 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        About Me
      </h1>

      {/* About Text */}
      <p className="text-lg  leading-relaxed">
        Hi, I'm <span className="text-indigo-600 font-semibold">Pratiksha</span>{" "}
        – A MERN Stack Developer passionate about building web applications and
        always eager to learn and grow! I craft intuitive, visually captivating,
        and impactful web applications that seamlessly blend functionality with
        aesthetics. With a keen eye for detail and a commitment to excellence, I
        deliver transformative solutions that leave a lasting impression. Driven
        by curiosity and innovation, I constantly seek new challenges to refine
        my craft and push creative boundaries.
      </p>

      <br />

      {/* Education Section */}
      <div className="mt-6">
        <h2 className="text-green-700 font-bold text-xl">Education</h2>
        <p className="text-md">
          <span className="font-semibold">Bachelor's in Computer Science</span>
          <br />
          Shri Ram Institute of Science & Technology (2022 - 2026)
        </p>
        <p className="text-sm text-gray-500">
          Relevant Coursework: Web Development, Data Structures, Algorithms,
          Software Engineering, Database Management Systems, OOP, OS, Cloud
          Computing, AI Fundamentals.
        </p>
      </div>

      <br />

      {/* Skills Section */}
      <div>
        <h2 className="text-green-700 font-bold text-xl">Skills</h2>
        <ul className="list-disc list-inside text-md space-y-1 mt-2">
          <li>
            <span className="font-semibold">Languages:</span> JavaScript (ES6+),
            HTML5, CSS3, SQL, Core Java + DSA
          </li>
          <li>
            <span className="font-semibold">Frontend:</span> React.js, Redux,
            Tailwind CSS, Material UI
          </li>
          <li>
            <span className="font-semibold">Backend:</span> Node.js, Express.js,
            RESTful APIs, GraphQL
          </li>
          <li>
            <span className="font-semibold">Databases:</span> MongoDB, MySQL,
            Firebase
          </li>
          <li>
            <span className="font-semibold">Version Control:</span> Git, GitHub
          </li>
          <li>
            <span className="font-semibold">Tools & Libraries:</span> Postman,
            NPM
          </li>
          <li>
            <span className="font-semibold">Deployment & Hosting:</span> Heroku,
            Netlify
          </li>
        </ul>
      </div>

      <br />

      {/* Goals Section */}
      <div>
        <h2 className="text-green-700 font-bold text-xl">Goal</h2>
        <p className="text-lg">
          As a passionate developer, my goal is to create **scalable,
          user-centered applications** that solve real-world problems. I aim to
          continually **expand my skills**, collaborate with **innovative
          teams**, and ultimately become a **leading tech professional** driving
          impactful projects that inspire others.
        </p>
      </div>
    </div>
  );
}

export default About;
