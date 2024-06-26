import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='p-5 bg-yellow-300 text-black flex justify-center'>
      <div className='flex flex-col text-center'>
        <div className='text-xl pb-3'>Follow us on</div>

        <div className='mx-auto grid grid-cols-3 gap-3 text-center'>
          <div>
            <a href="https://www.facebook.com/anthro.uy"><IoLogoFacebook className='text-xl'/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/anthro_mm/"><FaInstagramSquare className='text-xl' /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/anthropology-uy"><FaLinkedin className='text-xl' /></a>
          </div>
        </div>

        <div className='text-center hidden md:flex flex-col mt-5'>
            <p className='pt-3'>Address : Ramanya Hall, University of Yangon (Main Campus), Pyay Road, Yangon</p>
            <p className='pt-3'>Telephone : +65 8762 5331, +95 9 254077935</p>
            <p className='pt-3'>Email : dal.uy.edu@gmail.com</p>
        </div>

        <div className='pt-10 pb-1'>© 2024 | Department of Anthropology, University of Yangon | All rights reserved</div>

      </div>
    </div>
  )
}

export default Footer
