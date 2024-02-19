import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineExpandMore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import anthro from '../assets/anthropology.jpg';

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const [aboutIsToggle, setAboutIsToggle] = useState(false);

  return (
    <div className='p-3 w-full bg-white text-slate-900 drop-shadow shadow-lg grid md:flex justify-between'>
      <Link to="/" className='flex justify-center items-center'>
        <img src={anthro} alt="Image" className="w-[60px]" />
      </Link>
      <div className='hidden justify-center items-center md:flex'>
        <Link to="/" className='mx-4 text-xl'>Home</Link>
        <button onClick={() => setAboutIsToggle(prev => !prev)} className='mx-4 text-xl'>
          <div className='flex'>
            <p>About</p>
            <MdOutlineExpandMore className='my-auto' />
          </div>
        </button>
        {aboutIsToggle ? (
          <div className='absolute top-20 bg-white text-slate-900 border-2 ml-2 px-10 py-4'>
            <div className='flex flex-col'>
              <Link to='/about' className='my-5 text-xl' onClick={() => setAboutIsToggle(false)}>About Us</Link>
              <Link to='/about/museum' className='my-5 text-xl' onClick={() => setAboutIsToggle(false)}>Museum</Link>
              <Link to='/about/library' className='my-5 text-xl' onClick={() => setAboutIsToggle(false)}>Library</Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <Link to="/program" className='mx-4 text-xl'>Program</Link>
      </div>
      <div className='hidden md:flex'>
      <div className='mx-auto my-3 grid grid-cols-5 gap-3 text-center items-center'>
          <div>
            <a href="#"><IoLogoFacebook className='text-3xl'/></a>
          </div>
          <div>
            <a href="#"><FaInstagramSquare className='text-3xl' /></a>
          </div>
          <div>
            <a href="#"><FaLinkedin className='text-3xl' /></a>
          </div>
        </div>
      </div>
      <div className='cursor-pointer text-center mr-1 md:hidden text-xl'>
        <button onClick={() => setIsToggle(prev => !prev)} className='text-5xl'><GiHamburgerMenu /></button>
        {isToggle ? (
          <div className='h-screen w-full'>
            <div className='flex flex-col justify-center items-center'>
              <Link to='/' className='my-5' onClick={() => setIsToggle(false)}>Home</Link>
              <Link to='/about' className='my-5' onClick={() => setIsToggle(false)}>About</Link>
              <Link to='/about/museum' className='my-5' onClick={() => setIsToggle(false)}>Museum</Link>
              <Link to='/about/library' className='my-5' onClick={() => setIsToggle(false)}>Library</Link>
              <Link to='/program' className='my-5' onClick={() => setIsToggle(false)}>Program</Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
