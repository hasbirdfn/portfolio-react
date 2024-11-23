import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaReact,FaNodeJs,FaWordpress  } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiJavascript,SiExpress, SiTailwindcss,SiBootstrap, SiMongodb,SiMysql,SiLaravel, SiCodeigniter, SiPhp } from "react-icons/si";
import Reveal from "./Reveal";
// Gambar
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

const projects = [
  {
    id: 1,
    img: project1,
    title: "Application Book",
    description: "Building a book list application using MERN technology",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/MERN_Book_APP",
    },
    technologies: [
      { icon: <SiMongodb />, color: "text-green-500" },
      { icon: <SiExpress />, color: "text-gray-800" },
      { icon: <FaReact />, color: "text-cyan-500" },
      { icon: <FaNodeJs />, color: "text-green-600" },
    ],
  },
  {
    id: 2,
    img: project2,
    title: "Website Software House",
    description: "Landing page for a software house company",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/agency_project",
    },
    technologies: [
      { icon: <FaReact />, color: "text-cyan-500" },
      { icon: <SiJavascript />, color: "text-yellow-400" },
      { icon: <SiTailwindcss />, color: "text-teal-400" },
      { icon: <TbBrandFramerMotion />, color: "text-purple-500" },
    ],
  },
  {
    id: 3,
    img: project3,
    title: "Application CRUD Academic",
    description: "Building a Database Academic App application",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/MERN-Akademik-APP",
    },
    technologies: [
       
      { icon: <SiMongodb />, color: "text-green-500" },
      { icon: <SiExpress />, color: "text-gray-800" },
      { icon: <FaReact />, color: "text-cyan-500" },
      { icon: <FaNodeJs />, color: "text-green-600" },
    ],
  },
  {
    id: 4,
    img: project4,
    title: "Attendance GPS Application",
    description: "PT IBP Konsultan Building a consulting company GPS attendance application",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/Absensi-GPS",
    },
    technologies: [
      { icon: <SiLaravel />, color: "text-red-500" },
      { icon: <SiPhp />, color: "text-indigo-500" },
      { icon: <SiMysql />, color: "text-blue-500" },
      { icon: <SiBootstrap />, color: "text-indigo-500" },
      { icon: <DiCss3 />, color: "text-blue-500" },
    ],
  },
  {
    id: 5,
    img: project5,
    title: "HRIS Application",
    description: "PT Sahaware Teknologi Indonesia, Landing page for a software house company",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/teamhris",
    },
    technologies: [
      { icon: <SiCodeigniter />, color: "text-red-600" },
      { icon: <SiPhp />, color: "text-indigo-500" },
      { icon: <SiMysql />, color: "text-blue-500" },
      { icon: <SiBootstrap />, color: "text-indigo-500" },
      { icon: <DiCss3 />, color: "text-blue-500" },
    ],
  },
  {
    id: 6,
    img: project6,
    title: "Website TravelPy",
    description: "Landing page for a HasBcode landing page website for beach destination vacations using travelPy",
    links: {
      site: "https://travelpy.vercel.app/",
      github: "https://github.com/hasbirdfn/travel",
    },
    technologies: [
      { icon: <AiOutlineHtml5 />, color: "text-orange-500" },
      { icon: <DiCss3 />, color: "text-blue-500" },
      { icon: <SiJavascript />, color: "text-yellow-400" },
    ],
  },
  {
    id: 7,
    img: project7,
    title: "Project #2",
    description: "Landing page for a software house company",
    links: {
      site: "https://spkonsultan.com/",
      github: "#",
    },
    technologies: [
      { icon: <FaWordpress />, color: "text-blue-600" },
      { icon: <AiOutlineHtml5 />, color: "text-orange-500" },
      { icon: <DiCss3 />, color: "text-blue-500" },
    ],
  },
  {
    id: 8,
    img: project8,
    title: "RestFUll API",
    description: "Landing page for a test API use OMDb API",
    links: {
      site: "#",
      github: "#",
    },
    technologies: [
      { icon: <AiOutlineHtml5 />, color: "text-orange-500" },
      { icon: <DiCss3 />, color: "text-blue-500" },
      { icon: <SiJavascript />, color: "text-yellow-400" },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-8">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const [hoveredIcon, setHoveredIcon] = useState(null);

          return (
            <Reveal key={project.id}>
              <div className="bg-purple-700/10 rounded-lg shadow-xl overflow-hidden flex flex-col">
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:opacity-90 transition duration-300 cursor-pointer"
                />

                <div className="flex-1 p-4">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Icons Section */}
                  <div className="flex justify-center space-x-4 mb-4">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className={`text-3xl ${
                          hoveredIcon === i ? tech.color : "text-gray-500"
                        } transition duration-300`}
                        onMouseEnter={() => setHoveredIcon(i)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  {/* Links Section */}
                  <div className="flex justify-center space-x-4">
                    {project.links.site && (
                      <a
                        href={project.links.site}
                        className="px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Site
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineGithub className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
