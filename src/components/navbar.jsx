import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineExpandMore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import anthro from '../assets/anthropology.jpg';
import { motion } from 'framer-motion';
import Auth from './auth';

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const [aboutIsToggle, setAboutIsToggle] = useState(false);

  return (
    <div className='p-4 w-full bg-white text-black drop-shadow shadow-lg flex justify-between'>

      <Link to="/" className='hidden md:flex justify-center items-center'>
        <img src={anthro} alt="Image" className="w-[60px]" />
      </Link>

      <div className='hidden justify-center items-center md:flex'>
        <Link to="/" className='mx-4 text-lg'>Home</Link>
        <button onClick={() => setAboutIsToggle(prev => !prev)} className='mx-4 text-lg'>
          <div className='flex'>
            <p>About</p>
            <MdOutlineExpandMore className='my-auto' />
          </div>
        </button>
        {aboutIsToggle ? (
          <div className='absolute left-96 top-20 w-96 h-80 bg-white text-black text-center border-2 ml-6 px-10 py-4'>
            <div className='flex flex-col'>
              <Link to='/about' className='my-5 text-lg' onClick={() => setAboutIsToggle(false)}>About Us</Link>
              <Link to='/about/museum' className='my-5 text-lg' onClick={() => setAboutIsToggle(false)}>Museum</Link>
              <Link to='/about/library' className='my-5 text-lg' onClick={() => setAboutIsToggle(false)}>Library</Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <Link to="/program" className='mx-4 text-lg'>Program</Link>
      </div>

      <div className='hidden md:flex'>
      <div className='mx-auto my-3 grid grid-cols-5 gap-4 text-center items-center'>
          <div>
            <a href="https://www.facebook.com/anthro.uy"><IoLogoFacebook className='text-3xl text-blue-500'/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/anthro_mm/"><FaInstagramSquare className='text-3xl text-red-400' /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/anthropology-uy"><FaLinkedin className='text-3xl text-blue-700' /></a>
          </div>
        </div>
      </div>

      <div className='hidden md:flex justify-center'>
        <Auth />
      </div>

      <div className='cursor-pointer mr-1 md:hidden text-xl'>
        <button onClick={() => setIsToggle(prev => !prev)} className='text-5xl'><GiHamburgerMenu /></button>
        {isToggle ? (
          <motion.div
            initial={{ capacity: 0, x: -100 }}
            animate={{ capacity: 1, x: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute bg-white border-2 border-gray-300 w-screen h-screen flex flex-col items-center'>
              <div className='flex justify-center items-center'>
                <img src={anthro} alt="Image" className="w-[60px]" />
              </div>
              <Link to='/' className='my-5' onClick={() => setIsToggle(false)}>Home</Link>
              <Link to='/about' className='my-5' onClick={() => setIsToggle(false)}>About</Link>
              <Link to='/about/museum' className='my-5' onClick={() => setIsToggle(false)}>Museum</Link>
              <Link to='/about/library' className='my-5' onClick={() => setIsToggle(false)}>Library</Link>
              <Link to='/program' className='my-5' onClick={() => setIsToggle(false)}>Program</Link>
              <div className='my-3 grid grid-cols-3 gap-4 text-center items-center'>
                <div>
                  <a href="https://www.facebook.com/anthro.uy"><IoLogoFacebook className='text-3xl text-blue-500'/></a>
                </div>
                <div>
                  <a href="https://www.instagram.com/anthro_mm/"><FaInstagramSquare className='text-3xl text-red-400' /></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/anthropology-uy"><FaLinkedin className='text-3xl text-blue-700' /></a>
                </div>
            </div>
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
