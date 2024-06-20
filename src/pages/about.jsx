import { useEffect, useState } from 'react'
import library from '../assets/library.jpg'
import { motion } from 'framer-motion'

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* About Department */}
      <div 
      className="flex flex-col text-center h-auto w-screen py-5 md:py-28" >
        <motion.div
          initial={{y: 70, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{ duration: 2.5 }}
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
        <h1 className='py-5 text-3xl'>History of Department</h1>
        <p className='px-2 md:px-10 text-lg text-justify'>
        The Department of Anthropology in Yangon University was established in 1950, in Judson Hall. Its location on the campus has moved over the years: first, to the Social Science building, then in 1964 to Taungoo Hall. Since 1983 the Anthropology Department has been located in Yamanya Hall. The Department started small, with few staff and students but then expanded to include Sociology and even International Relations for a few years until Anthropology was reduced to a minor subject status under the new education system in 1964. At that point, the Department shrank in numbers of staff and students, until 1982 when Anthropology was restored to major subject status again. <button onClick={() => setShowMore(prev => !prev)} className=' text-blue-900 px-2'>See More</button></p>
        
        { showMore && <p className='px-2 md:px-10 text-lg text-justify'>
          In the early years of the Department, several overseas academics supported the teaching of Anthropology, Sociology and International Relations in Yangon, while several Myanmar academics furthered their studies in the USA and the UK. Nowadays the Department is staffed by Myanmar academics.
          Anthropology can be taken by Arts students as well as Science students. Science students taking Anthropology as a minor subject can earn a B.A Degree. Post-graduate students have to carry out field research and collect survey data for their Masters thesis.
          Following the example of the University of Yangon, in the late 1950s other intermediate colleges teaching Anthropology were opened in Myanmar: in Mawlamyine, Pathein and Kyaukphyu.
          The Department of Anthropology in Yangon University was established in 1950 under the Rector at that time, Dr. Htin Aung, in Judson Hall. Dr Htin Aung was also an honorary professor of the Anthropology Department, lecturing with visiting professor Dr. K. G. Orr from Chicago University.
          To begin with the Anthropology Department had seven first year students and three post graduate students. Daw Khin Khin Oo and Daw Khin Hmway were appointed tutors before Dr. K. G. Orr left to go back to Chicago. Then the two tutors were sent on state scholarships to Chicago and Alabama Universities in the USA and Mr. Musgrave lectured during their absence.
          When Daw Khin Khin Oo and Daw Khin Hmway returned from the USA in the a/y 1952-1953, Daw Khin Khin Oo was appointed Head of the Anthropology Department and the Department started teaching a range of classes from intermediate level, with a Masters degree introduced in 1957.
          Several overseas academics taught in the Anthropology Department over the years in addition to those already mentioned. Mr. A. Sharma from New Delhi University was a full time assistant lecturer 1953 to 1955, and Dr. Orshinski, a Fullbright Smithsonian scholar, lectured in 1954-1955. Dr. Burling (1959-1960), Dr. E. B. Banks (1960-1961) and Mr. B. A. V. Peacock (1960-1962) also worked as Anthropology lecturers.

          Several of the Myanmar academic staff studied for their postgraduate degrees in the United Kingdom and the United States of America on state scholarships.
          From 1954 until 1959 the Department taught Sociology as well and became the Department of Sociology and Anthropology. Mr. K. W. Dunning (1957-1958), Dr. F. Nothingham (1957-1958), Dr. G. Theodorson (1958-1959) and Mr. P. A. Mannis (1958-1959), all Fullbright Smithsonian scholars, taught Social Science subjects. When faculties were introduced in the University of Yangon, Anthropology and Sociology became part of Social Sciences.

          From 1957 to 1959, Dr. Johnstone from John Hopkins Centre taught International Relations through the Anthropology Department, at Bachelor of Arts and Masters levels. In 1959-60, International Relations moved into the Department of History.

          In 1959 Sociology teaching was discontinued until the new education system started in 1964.
          
          In 1962, staff postings within the university left only a lecturer and an assistant lecturer in the Department of Anthropology. There were only 33 students taking Anthropology in 1964, with only three studying for an Anthropology Masters degree.

          Under the new education system in 1964, Anthropology became just a minor subject. Only in 1982 was it restored to major subject status again.

          In the newly established Anthropology Department, from 1982, Daw Nwe Nwe took over as the Head of Department. There were only twenty students in the first year class, and the same in 1983. Six teaching members of staff taught them, including the Head of Department: Daw Nwe Nwe, Daw Kyin Kyin, U Wallace Kangyi, Daw Aye Aye Myint, U Sein Htun and Daw Tin Yi.
          
          After Daw Nwe Nwe had retired, Daw Kyin Kyin succeeded her as Head of Department, followed in her turn by U Sein Htun, then Daw Tin Yi from 1990 to 1997 when she became a professor. After Daw Tin Yi retired in 2005, U Kyaw Han succeeded her, followed by Dr. Daw Mya Mya Khin. Dr Daw Mya Mya Khin has been Head of the Anthropology Dept from 2006 up until the present.
          
          Meanwhile, in the Hlaing Campus of the University of Yangon, the first Anthropology classes started in 1982. U Wallace Kangyi was the Branch Head at that time. From 1991 to 1995 U Kyaw Han served as Branch Head.

          Now the number of Anthropology students increases annually and ranges from first year undergraduate students to Masters Research students specializing in Anthropology. PhD courses have been running since a/y 2006-2007.
          </p>}
        </motion.div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-[url('./assets/hero3.jpg')] bg-cover bg-center bg-no-repeat bg-scroll opacity-90 text-white flex flex-col text-center h-full w-screen py-5 md:py-20" >
        <motion.div
          initial={{y: 70, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
        <h1 className='py-5 text-3xl'>Mission and Vision</h1>
        <div className='px-2 md:px-10 text-lg text-center'>
          <ul>
            <li className='py-3'>To set up acceptable forms and functions of human diversity and cultures in the present and the past through intensive field work</li>
            <li className='py-3'>To increase students’ knowledge and skills in the intellectual, social and economic development related to local and global Anthropology</li>
            <li className='py-3'>To develop creative research, teaching and a leading voice for the practice of public, collaborative and community engaged Anthropology</li>
            <li className='py-3'>To study bio-cultural diversity in the present and the past</li>
            <li className='py-3'>To develop students’ skills in research and theories, writing and the application of Anthropological knowledge to enhance academic excellence and professional development</li>
            <li className='py-3'>To offer the highest quality instruction in Anthropological implementation in community development</li>
          </ul>
        </div>
        </motion.div>
      </div>

      {/* Library */}
      <motion.div
        initial={{y: 70, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
        className='flex flex-col justify-center md:flex-row h-full w-screen py-5 md:py-20'>
      <div className='my-4 flex justify-center'>
            <img className='w-screen px-5 md:px-10' src={library} alt="Library Image" />
        </div>

          <div className={`w-fit transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='py-5 text-3xl md:px-10 text-center'>Anthropology Library</h1>
            <p className='text-lg md:px-10 md:text-end'>Department of Anthropology library is more than just a place to read – it's a space for learning, dialogue, and discovery. The carefully designed space invites interaction and collaboration. Comfortable reading areas and quiet study nooks provide the perfect environment for focused learning. Beyond Myanmar, the library extends its reach to encompass the wider world of social sciences. Texts on general anthropology offer a comparative perspective, allowing you to explore the myriad ways in which societies across the globe have evolved and interacted. Books on research methodology equip students and researchers with the tools they need to delve deeper into the complexities of human societies.</p>
          </div>
          
      </motion.div>

    </div>
  )
}

export default About
