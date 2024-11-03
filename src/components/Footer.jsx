import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp, FaGithubSquare, FaInstagram } from 'react-icons/fa'; // Tambah FaWhatsapp
import { motion } from 'framer-motion'; // Import framer-motion untuk animasi
import hasbcodelogo from '../assets/hasbcodelogo.png'; // Import gambar

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Fungsi untuk menangani scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {  // Ketika scroll melebihi 300px
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variants untuk animasi smooth muncul dari kanan ke kiri
  const iconVariants = {
    hidden: { opacity: 0, x: 100 },  // Mulai dari luar layar (kanan)
    visible: {
      opacity: 1,
      x: 0,  // Ke posisi normal
      transition: {
        type: "spring", // Efek spring agar smooth
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <footer className='max-w-[1300px] mx-auto p-6 md:p-20 text-sm md:text-lg mt-12 relative'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        {/* Logo di sebelah kiri */}
        <a href="#" className="flex items-center gap-4 mb-6 md:mb-0">
          <img 
            src={hasbcodelogo}
            alt="HasbBcode Logo" 
            className='w-16 h-16 md:w-32 md:h-32 rounded-full object-cover' 
          />
          <h3 className='text-2xl text-gray-200 font-semibold'>HasbBcode</h3>
        </a>

        {/* Ikon Sosial Media di sebelah kanan */}
        <div className='flex flex-row gap-6 text-gray-400 text-4xl justify-center md:justify-end'>
          <a 
            href="https://github.com/hasbirdfn" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a 
            href="https://www.instagram.com/radifan14/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Nama dan hak cipta */}
      <div className='text-center text-gray-400 mt-6'>
        © 2024 Hasbi Radifan L
      </div>

      {/* Tombol Scroll to Top */}
      {showScroll && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          className="fixed right-10 bottom-10 flex flex-col items-center space-y-4"
        >
          {/* Tombol Scroll to Top */}
          <FaArrowCircleUp 
            className="text-5xl text-gray-400 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          />
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
