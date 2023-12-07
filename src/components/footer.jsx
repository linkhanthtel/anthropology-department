import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='p-5 bg-black text-white flex justify-center'>
      <div className='flex flex-col text-center'>
        <div className='text-xl pb-3'>Follow us on</div>

        <div className='mx-auto grid grid-cols-5 gap-3 text-center'>
          <div>
            <a href="#"><IoLogoFacebook className='text-xl'/></a>
          </div>
          <div>
            <a href="#"><FaInstagramSquare className='text-xl' /></a>
          </div>
          <div>
            <a href="#"><FaLinkedin className='text-xl' /></a>
          </div>
          <div>
            <a href="#"><FaYoutube className='text-xl' /></a>
          </div>
          <div>
            <a href="#"><FaSquareXTwitter className='text-xl' /></a>
          </div>
        </div>

        <div className='text-white text-center hidden md:flex flex-col mt-5'>
            <p className='pt-3'>Address : Ramanya Hall, University of Yangon (Main Campus), Pyay Road, Yangon</p>
            <p className='pt-3'>Telephone : +12345678</p>
            <p className='pt-3'>Email : dal.uy.edu@gmail.com</p>
        </div>

        <div className='pt-10 pb-1'>© 2024 | Department of Anthropology, University of Yangon | All rights reserved</div>

      </div>
    </div>
  )
}

export default Footer
