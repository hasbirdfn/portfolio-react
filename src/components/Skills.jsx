import React, { useState } from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiMaterializecss,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiMysql,
  DiLaravel,
  DiCodeigniter,
  DiPhp,
} from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Front-end",
    technologies: [
      { name: "HTML", icon: <DiHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <DiCss3 />, color: "text-blue-500" },
      { name: "Bootstrap", icon: <DiBootstrap />, color: "text-indigo-500" },
      { name: "JavaScript", icon: <DiJavascript1 />, color: "text-yellow-400" },
      { name: "React", icon: <DiReact />, color: "text-cyan-500" },
      { name: "Material", icon: <DiMaterializecss />, color: "text-indigo-400" },
    ],
  },
  {
    category: "Back-End",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall />, color: "text-green-500" },
      { name: "PHP", icon: <DiPhp />, color: "text-indigo-500" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
      { name: "MySQL", icon: <DiMysql />, color: "text-blue-500" },
      { name: "Laravel", icon: <DiLaravel />, color: "text-red-600" },
      { name: "Codeigniter", icon: <DiCodeigniter />, color: "text-red-700" },
    ],
  },
];

const Skills = () => {
  // State untuk menyimpan indeks yang sedang dihover untuk setiap kategori
  const [hoveredIcon, setHoveredIcon] = useState({
    "Front-end": null,
    "Back-End": null,
  });

  // Fungsi untuk menangani hover pada setiap kategori
  const handleMouseEnter = (category, idx) => {
    setHoveredIcon((prev) => ({ ...prev, [category]: idx }));
  };

  const handleMouseLeave = (category) => {
    setHoveredIcon((prev) => ({ ...prev, [category]: null }));
  };

  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full">
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4 justify-center">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 justify-center"
                    onMouseEnter={() => handleMouseEnter(skill.category, idx)}
                    onMouseLeave={() => handleMouseLeave(skill.category)}
                  >
                    <div
                      className={`text-3xl ${
                        hoveredIcon[skill.category] === idx ? tech.color : "text-gray-500"
                      } transition duration-300`}
                    >
                      {tech.icon}
                    </div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
