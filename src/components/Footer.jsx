import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import hasbcodelogo from "../assets/hasbcodelogo.png"; // Import gambar

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        {/* Logo di sebelah kiri */}
        <a href="#" className="flex items-center gap-4 mb-6 md:mb-0">
          <img 
            src={hasbcodelogo}
            alt="Foto HasBcode" 
            className='w-16 h-16 md:w-32 md:h-32 rounded-full object-cover' 
          />
          <h3 className='text-2xl text-gray-200 font-semibold'>HasbBcode</h3>
        </a>

        {/* Ikon Sosial Media di sebelah kanan */}
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a 
            href="https://github.com/hasbirdfn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a 
            href="https://www.instagram.com/radifan14/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Nama dan hak cipta */}
      <div className='text-center text-gray-400 mt-6'>
        © 2024 Hasbi Radifan L
      </div>
    </div>
  )
}

export default Footer
