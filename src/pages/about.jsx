import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* About Department */}
      <div className='bg-gray-300 flex flex-col text-center h-full w-screen py-5 md:py-28' >
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl'>History of Department</h1>
        <p className='px-2 md:px-10 text-lg text-justify'>
        The Department of Anthropology in Yangon University was established in 1950, in Judson Hall. Its location on the campus has moved over the years: first, to the Social Science building, then in 1964 to Taungoo Hall. Since 1983 the Anthropology Department has been located in Yamanya Hall. The Department started small, with few staff and students but then expanded to include Sociology and even International Relations for a few years until Anthropology was reduced to a minor subject status under the new education system in 1964. At that point, the Department shrank in numbers of staff and students, until 1982 when Anthropology was restored to major subject status again.
        In the early years of the Department, several overseas academics supported the teaching of Anthropology, Sociology and International Relations in Yangon, while several Myanmar academics furthered their studies in the USA and the UK. Nowadays the Department is staffed by Myanmar academics.
        Anthropology can be taken by Arts students as well as Science students. Science students taking Anthropology as a minor subject can earn a B.A Degree. Post-graduate students have to carry out field research and collect survey data for their Masters thesis.
        Following the example of the University of Yangon, in the late 1950s other intermediate colleges teaching Anthropology were opened in Myanmar: in Mawlamyine, Pathein and Kyaukphyu.
        The Department of Anthropology in Yangon University was established in 1950 under the Rector at that time, Dr. Htin Aung, in Judson Hall. Dr Htin Aung was also an honorary professor of the Anthropology Department, lecturing with visiting professor Dr. K. G. Orr from Chicago University.
        To begin with the Anthropology Department had seven first year students and three post graduate students. Daw Khin Khin Oo and Daw Khin Hmway were appointed tutors before Dr. K. G. Orr left to go back to Chicago. Then the two tutors were sent on state scholarships to Chicago and Alabama Universities in the USA and Mr. Musgrave lectured during their absence.
        When Daw Khin Khin Oo and Daw Khin Hmway returned from the USA in the a/y 1952-1953, Daw Khin Khin Oo was appointed Head of the Anthropology Department and the Department started teaching a range of classes from intermediate level, with a Masters degree introduced in 1957.</p>
        </div>
      </div>

      {/* Museum */}
      <div className='bg-white flex flex-row text-start h-full w-screen py-5 md:py-28'>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl md:px-10 text-center md:w-[50%]'>Anthropology Museum</h1>
        <p className='text-center md:px-10 md:text-start md:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus praesentium incidunt iste. Aspernatur quia ad ipsa ullam eaque. Distinctio consectetur perferendis quas, voluptatem magnam voluptate voluptates nihil soluta ipsum.</p>
        </div>
        <div>
          <h1 className='px-10 hidden md:flex'>Image</h1>
        </div>
      </div>

      {/* Library */}
      <div className='bg-gray-300 flex flex-row text-end h-full py-5 md:py-28 w-screen'>
        <div>
          <h1 className='px-10 hidden md:flex'>Image</h1>
        </div>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='py-5 text-3xl text-center md:pl-[50%]'>Anthropology Library</h1>
        <p className='text-center text-lg md:px-10 md:text-end md:pl-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus praesentium incidunt iste. Aspernatur quia ad ipsa ullam eaque. Distinctio consectetur perferendis quas, voluptatem magnam voluptate voluptates nihil soluta ipsum.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default About
