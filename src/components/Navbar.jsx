import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import hasbcodelogo from "../assets/hasbcodelogo.png"; // Import gambar

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
          <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
            
          <a href="#" className="flex items-center gap-2">
                <img 
                    src={hasbcodelogo}
                    alt="Foto Hasbi Radifan L" 
                    className='w-16 h-16 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full object-cover mx-auto' 
                />
                </a>
      
            {/* Menu List */}
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
              <li><Link to="hero" smooth={true} offset={50} duration={500}>Beranda</Link></li>
              <li><Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link></li>
              <li><Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link></li>
              <li><Link to="experience" smooth={true} offset={50} duration={500}>Experience</Link></li>
              <li><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>
      
            {/* Mobile Menu Icon */}
            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
      
            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={nav ? 'open' : 'closed'}
              variants={menuVariants}
              className='fixed right-0 top-0 w-full min-h-screen bg-purple-900  z-40'
            >
              <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                <li><Link to="hero" onClick={closeNav} smooth={true} offset={50} duration={500}>Beranda</Link></li>
                <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>Skills</Link></li>
                <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li><Link to="experience" onClick={closeNav} smooth={true} offset={50} duration={500}>Experience</Link></li>
                <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>
      )
      
}

export default Navbar