import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../components/contact';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const newsLetterNotify = () => {
    toast('Thanks for subscribing to our newsletter!');
  }
  return (
    <div>
      {/* hero */}
      <div className="bg-[url('./assets/hero4.jpg')] bg-no-repeat bg-cover h-[600px] w-screen py-36 text-center">
        <motion.div
          initial={{y: 70, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{ duration: 3 }}
        >
          <h1 className='text-3xl text-white font-bold py-5'>Home of Anthropology</h1>
          <p className='text-white text-xl md:px-40'>Welcome to official page of Department of Anthropology, University of Yangon. Explore more about the history of our department and facilities. With the aims of sharing the latest updates about the department.</p>
        </motion.div>
        <motion.div 
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{ duration: 3 }}
          className='flex justify-center items-center'>
          <div className='p-3 my-5 w-fit bg-yellow-600 rounded-full text-white transition ease-in-out delay-150 hover:bg-yellow-800 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Link to="/about">Learn More</Link>
          </div>
        </motion.div>
      </div>

      {/* Newsletter */}
      <div className='md:flex justify-center py-10 px-3 bg-gray-200'>
        <div className='flex justify-center items-center'>
          <input required type="text" placeholder='Sign Up to our newsletter' className='mr-3 p-3 rounded-sm h-10 w-80' />
          <div className='flex justify-center items-center md:mt-1'>
            <button type='submit' onClick={newsLetterNotify} className='p-2 bg-yellow-600 text-white hover:bg-yellow-800 mt-2 md:mb-1 md:mt-0'>Subscribe</button>
            <ToastContainer />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='grid grid-cols-1 text-black md:grid-cols-3 gap-2 bg-white'>
        <motion.div 
          initial={{y: 70, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 3 }}
          className='flex flex-col justify-center text-center my-5 px-5 py-4'>
          <span className='text-lg my-3'>About</span>
          <p className='text-justify'>The Department started small, with few staff and students but then expanded to include Sociology and even International Relations for a few years until Anthropology was reduced to a minor subject status under the new education system in 1964. Anthropology can be taken by Arts students as well as Science students. Science students taking Anthropology as a minor subject can earn a B.A Degree. Post-graduate students have to carry out field research and collect survey data for their Masters thesis.</p>
          <div className='flex justify-center items-center'>
            <Link className='p-2 my-3 w-52 border border-black rounded-lg hover:bg-slate-950 hover:text-white' to='/about'>Learn More</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{y: 70, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 3 }}
          className='flex flex-col justify-center text-center my-5 px-5 py-4'>
          <span className='text-lg my-3'>Museum</span>
          <p className='text-justify'>Though small in size, the space brims with the stories and traditions of a vibrant land, meticulously curated within its intimate halls. The museum's heart lies in its collection of ancient tools. Here, timeworn stones used for grinding grain whisper of daily life in long-ago villages, while delicately chipped arrowheads hint at the skills of hunters who once roamed Myanmar's lush landscapes. Alongside these practical implements, the museum showcases a treasure trove of artifacts.</p>
          <div className='flex justify-center items-center'>
            <Link className='p-2 my-3 w-52 border border-black rounded-lg hover:bg-slate-950 hover:text-white' to='/about/museum'>Learn More</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{y: 70, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 3 }}
          className='flex flex-col justify-center text-center my-5 px-5 py-4'>
        <span className='text-lg my-3'>Library</span>
          <p className='text-justify'>The traditional card catalog may be replaced by a cutting-edge e-library system, allowing visitors to navigate the extensive collection with ease. Books delve into the intricate social structures of various communities, exploring kinship systems, religious practices, and traditional ways of life. Others dive into the political landscape of Myanmar, offering insights into historical events, contemporary challenges, and the ongoing quest for social justice.</p>
          <div className='flex justify-center items-center'>
            <Link className='p-2 my-3 w-52 border border-black rounded-lg hover:bg-slate-950 hover:text-white' to='/about/library'>Learn More</Link>
          </div>
        </motion.div>
      </div>

      {/* Contact */}
      <Contact />

    </div>
  )
}

export default Home
