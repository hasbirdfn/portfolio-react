import React from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "Building a book list application using MERN technology",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/MERN_Book_APP",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "Building a landing page for a software house company using React, Tailwind, AOS technologies.",
    links: {
      site: "https://agency-ashen-rho.vercel.app/",
      github: "https://github.com/hasbirdfn/agency_project",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description: "Building a Database Academic App application using Express js, ejs, MongoDB technology",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/MERN-Akademik-APP",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "Building a consulting company GPS attendance application using PHP, Laravel, MySQL technology.",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/Absensi-GPS",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "Building an IT company HRIS application using PHP, Codeigniter, MySQL, JSON technology",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/teamhris",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description: "Building a movie application using API and JavaScript technology.",
    links: {
      site: "#",
      github: "https://github.com/hasbirdfn/Javascript_API",
    },
  },
  {
    img: project7,
    title: "Project #7",
    description: "Building a landing page for an SEO consulting company, using WordPress technology.",
    links: {
      site: "https://spkonsultan.com/",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-center text-gray-200 mb-8'>Portfolio</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className='bg-purple-700/10 rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform transform hover:scale-105'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-60 object-cover hover:opacity-90 transition duration-300 cursor-pointer'
              />
              <div className='flex-1 p-4'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex justify-center space-x-4'>
                  {project.links.site && (
                    <a
                      href={project.links.site}
                      className='px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className='px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center'
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
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
