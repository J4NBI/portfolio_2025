import React from "react";

import modal from "../assets/images/work/01_Login_Modal.png";
import estate from "../assets/images/work/02_Estate.png";
import assembly from "../assets/images/work/03_Assembly.png";
import janbihl from "../assets/images/work/04_janbihl.png";
import ToDo from "../assets/images/work/05_ToDo.png";

import arrow from "../assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Modal",
    year: "2024",
    title: "Login Modal",
    results: [{ title: "HTML" }, { title: "CSS" }, { title: "Tailwind" }],
    link: "https://j4nbi.github.io/login_modal_Tailwind/",
    github: "https://github.com/J4NBI/login_modal_Tailwind",
    image: modal,
  },
  {
    company: "Estate",
    year: "2024",
    title: "Explore homes",
    results: [{ title: "React" }, { title: "Tailwind" }, { title: "Motion" }],
    link: "https://j4nbi.github.io/real-estate/",
    github: "https://github.com/J4NBI/real-estate",
    image: estate,
  },
  {
    company: "ToDo App",
    year: "2024",
    title: "A little ToDo App",
    results: [
      { title: "Fullstack" },
      { title: "REST API" },
      { title: "Deployed" },
    ],
    link: "https://fullstack-to-do-app-frontend-bice.vercel.app/",
    github: "https://github.com/J4NBI/Fullstack_ToDoApp_backend.git",
    image: ToDo,
  },
  {
    company: "Game",
    year: "2024",
    title: "Assembly Endgame",
    results: [{ title: "React" }, { title: "Hooks" }, { title: "Responsive" }],
    link: "https://j4nbi.github.io/assembly_endgame_v2/",
    github: "https://github.com/J4NBI/assembly_endgame_v2",
    image: assembly,
  },
  {
    company: "Portfolio",
    year: "2024",
    title: "Next.js Portfolio",
    results: [{ title: "Next.js" }, { title: "Hooks" }, { title: "Motion" }],
    link: "https://portfolio-jans-projects-b47e0526.vercel.app/",
    github: "https://github.com/J4NBI/Portfolio",
    image: janbihl,
  },
];

const Work = () => {
  return (
    <div className="container py-20">
      <h2 className="text-third md:text-8xl text-6xl font-bold font-pop mb-8">
        work.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className="bg-back rounded-md hover:shadow-xl hover:scale-105 p-8 transition-all duration-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover mb-4"
            />
            <p className="text-prime/60 mt-4">
              {project.company} ({project.year})
            </p>
            <h2 className="text-2xl font-bold mb-2 text-prime">
              {project.title}
            </h2>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="bg-prime/50 text-back py-1 px-2 rounded"
                >
                  {result.title}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-prime hover:text-back ho text-white font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-500 "
              >
                {" "}
                View
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-back text-prime  border-2 border-prime font-bold py-2 px-4 rounded flex items-center justify-center hover:scale-105 transition-all duration-500"
              >
                GitHub <img src={arrow} alt="arrwo up" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
