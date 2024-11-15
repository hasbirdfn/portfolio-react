import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import HeroBgAnimation from "../components/HeroBgAnimation";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth - 0.5, // Normalisasi posisi X
      y: event.clientY / window.innerHeight - 0.5, // Normalisasi posisi Y
    });
  };

  return (
    <div
      className="mt-24 max-w-[1200px] mx-auto relative px-4 md:px-0" // Tambahkan px-4 untuk padding di layar kecil
      onMouseMove={handleMouseMove} id="hero"
    >
      <div className="grid md:grid-cols-2 place-items-center gap-8 px-4 md:px-0"> {/* Tambahkan px-4 untuk layar kecil */}
        {/* Bagian Teks */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Hasbi Radifan L</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am build things for Frontend and Backend
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a 
              href="/cv-hasbi.pdf" // Path ke file CV PDF yang berada di folder public
              download="CV-Hasbi" // Nama file yang akan terdownload
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
               CV
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/hasbirdfn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://id.linkedin.com/in/hasbi-radifan-l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/radifan14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bagian Gambar dan Animasi */}
        <div className="relative w-[300px] md:w-[450px] h-[450px] md:h-[600px] flex justify-center items-center overflow-hidden">
          {/* Animasi background di belakang gambar */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-full h-full">
              <HeroBgAnimation />
            </div>
          </div>

          {/* Gambar berada di depan animasi */}
          <motion.img
            src={profilepic}
            className="w-full h-full object-cover rounded-full z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              x: mousePosition.x * 50, // Mengubah posisi X berdasarkan pergerakan kursor
              y: mousePosition.y * 50, // Mengubah posisi Y berdasarkan pergerakan kursor
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl w-full justify-center items-center py-24 px-4 md:px-12" // Sesuaikan padding di sini
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      {/* Efek Shiny */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
