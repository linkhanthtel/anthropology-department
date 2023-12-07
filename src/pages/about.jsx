import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* About Department */}
      <div className='bg-gray-300 flex flex-col text-center h-full w-screen py-28'>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl'>About Our Department</h1>
        <p className='md:px-40'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corporis magni eaque? Ratione earum similique officiis esse doloribus cupiditate perspiciatis. Maxime iusto velit veritatis labore ratione voluptatem cumque, sed in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum dolorum aspernatur a consequuntur voluptatem repellat explicabo dolor incidunt velit quod numquam similique aut reiciendis earum, quisquam sapiente quos doloribus!</p>
        </div>
      </div>

      {/* Museum */}
      <div className='bg-white flex flex-row text-start h-full w-screen py-28'>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl md:px-10 text-center md:w-[50%]'>Anthropology Museum</h1>
        <p className='text-center md:px-10 md:text-start md:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus praesentium incidunt iste. Aspernatur quia ad ipsa ullam eaque. Distinctio consectetur perferendis quas, voluptatem magnam voluptate voluptates nihil soluta ipsum.</p>
        </div>
        <div>
          <h1 className='px-10 hidden md:flex'>Image</h1>
        </div>
      </div>

      {/* Library */}
      <div className='bg-gray-300 flex flex-row text-end h-full py-28 w-screen'>
        <div>
          <h1 className='px-10 hidden md:flex'>Image</h1>
        </div>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl text-center md:pl-[50%]'>Anthropology Library</h1>
        <p className='text-center md:px-10 md:text-end md:pl-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus praesentium incidunt iste. Aspernatur quia ad ipsa ullam eaque. Distinctio consectetur perferendis quas, voluptatem magnam voluptate voluptates nihil soluta ipsum.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default About
