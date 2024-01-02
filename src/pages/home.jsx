import React from 'react'
import { MdEmail } from "react-icons/md";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* hero */}
      <div className="h-full w-screen py-36 text-center">
        <h1 className='text-3xl text-black font-bold py-5'>Home of Anthropology</h1>
        <p className='text-black text-xl md:px-40'>Welcome to official page of Department of Anthropology, University of Yangon. Explore more about the history of our department and facilities. With the aims of sharing the latest updates about the department.</p>
        <div className='flex justify-center items-center'>
          <div className='p-3 my-5 w-fit bg-yellow-600 rounded-full text-white transition ease-in-out delay-150 hover:bg-yellow-800 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Link to="/about">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className='md:flex justify-center py-10 px-3 bg-gray-200'>
        <div className='flex justify-center mt-1'>
          <MdEmail className='text-7xl text-slate-900 flex justify-center' />
          <input type="text" placeholder='Sign Up to our newsletter' className='mr-3 p-3 my-auto rounded-sm h-10 w-full md:w-full' />
        </div>
        <div className='flex justify-center items-center mt-5 md:mt-1'>
          <button className='p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-800'>Subscribe</button>
        </div>
      </div>

      {/* About Section */}
      <div className='grid grid-cols-1 text-black md:grid-cols-3 bg-white'>
        <div className='flex flex-col justify-center text-center px-5 py-7 md:py-24'>
          <h3 className='py-4 text-xl'>About</h3>
          <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio itaque, hic id accusantium illum quam odit temporibus reiciendis dolorem sequi sint molestias officia reprehenderit recusandae repudiandae laborum laudantium laboriosam qui.</p>
        </div>
        <div className='flex flex-col justify-center text-center px-5 py-7 md:py-24'>
          <h3 className='py-4 text-xl'>Museum</h3>
          <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio itaque, hic id accusantium illum quam odit temporibus reiciendis dolorem sequi sint molestias officia reprehenderit recusandae repudiandae laborum laudantium laboriosam qui.</p>
        </div>
        <div className='flex flex-col justify-center text-center px-5 py-7 md:py-24'>
          <h3 className='py-4 texl-xl'>Library</h3>
          <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio itaque, hic id accusantium illum quam odit temporibus reiciendis dolorem sequi sint molestias officia reprehenderit recusandae repudiandae laborum laudantium laboriosam qui.</p>
        </div>
      </div>

      {/* Contact */}
      <div className='px-4 py-5 bg-gray-200'>
        <h1 className='text-center text-black text-xl'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <input type="text" placeholder='Name' className='my-4 mx-3 w-96 p-3' />
            <input type="text" placeholder='Email' className='my-4 mx-3 w-96 p-3' />
            <input type="text" placeholder='Occupation' className='my-4 mx-3 w-96 p-3' />
            <input type="text" placeholder='Address' className='my-4 mx-3 w-96 p-3' />
            <button className='p-5 text-white bg-yellow-600 rounded-md hover:bg-yellow-800 w-fit'>Submit</button>
          </div>
          <div className='text-black text-start flex flex-col mt-5'>
            <p className='pt-3'>Address : Ramanya Hall, University of Yangon (Main Campus), Pyay Road, Yangon</p>
            <p className='pt-3'>Telephone : +12345678</p>
            <p className='pt-3'>Email : dal.uy.edu@gmail.com</p>
            <p className='pt-3 animate-pulse text-red-500'> * The department is temporarily closed due to current political situations.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home
