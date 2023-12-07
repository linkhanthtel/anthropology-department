import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineExpandMore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className='p-4 w-full bg-slate-900 text-white flex justify-between'>
      <div>
        <h1>Anthropology</h1>
      </div>
      <div className='hidden justify-center md:flex'>
        <Link to="/" className='mx-7'>Home</Link>
        <button onClick={() => setIsToggle(prev => !prev)}>
          <div className='flex'>
            <p>About</p>
            <MdOutlineExpandMore className='my-auto' />
          </div>
        </button>
        <Link to="/program" className='mx-7'>Program</Link>
        {isToggle ? (
          <div className='bg-slate-900 absolute mt-10 ml-2 px-10 py-4'>
            <div className='flex flex-col'>
              <Link to='/about' className='my-5' onClick={() => setIsToggle(false)}>About Us</Link>
              <Link to='/about/museum' className='my-5' onClick={() => setIsToggle(false)}>Museum</Link>
              <Link to='/about/library' className='my-5' onClick={() => setIsToggle(false)}>Library</Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className='hidden md:flex'>
        <h1 className='mx-2'>Log In</h1>
        <h1 className='mx-2'>Register</h1>
      </div>
      <div className='cursor-pointer text-center mr-1 md:hidden text-xl sticky'>
        <button onClick={() => setIsToggle(prev => !prev)}><GiHamburgerMenu /></button>
        {isToggle ? (
          <div className='h-screen w-[50%]'>
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
