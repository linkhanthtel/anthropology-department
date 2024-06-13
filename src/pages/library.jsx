import React from 'react'
import library from '../assets/library.jpg'
import library2 from '../assets/library2.jpg'

function Library() {
  return (
    <div>
      <div className='flex flex-col text-start px-1 md:px-10'>
        <h1 className='py-10 text-3xl'>Anthropology Library</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          <p className='overscroll-auto w-auto'>Department of Anthropology library is more than just a place to read – it's a space for learning, dialogue, and discovery. The carefully designed space invites interaction and collaboration. Comfortable reading areas and quiet study nooks provide the perfect environment for focused learning. Group study rooms facilitate discussions and knowledge sharing, fostering a vibrant intellectual community.
          Whether you're a seasoned researcher, a curious student, or simply someone with a desire to understand the world around you, this anthropology library welcomes you with open arms. It serves as a springboard for exploration, offering a wealth of knowledge waiting to be unlocked. So, step inside, explore the shelves, and embark on a journey through the fascinating world of anthropology and social science, all within the unique context of Myanmar and beyond.</p>
          <div className='flex justify-center'>
            <img className='w-full h-full md:h-96' src={library} alt="Library Image" />
          </div>
        </div>

        <div className='grid my-5 md:my-10 md:grid-cols-2 gap-4'>
          <div className='flex justify-center'>
            <img className='w-full h-full md:h-96' src={library2} alt="Library Image" />
          </div>
          <p className='overscroll-auto w-auto'>From the foundational texts of cultural anthropology and ethnology to contemporary research on Myanmar's diverse ethnic groups, the shelves teem with stories waiting to be discovered. But this library is far more than just a repository of printed knowledge. Here, the past and present converge seamlessly. The traditional card catalog may be replaced by a cutting-edge e-library system, allowing visitors to navigate the extensive collection with ease. This innovative approach ensures not only accessibility but also the ability to access the latest research readily. Books delve into the intricate social structures of various communities, exploring kinship systems, religious practices, and traditional ways of life. Others dive into the political landscape of Myanmar, offering insights into historical events, contemporary challenges, and the ongoing quest for social justice. Beyond Myanmar, the library extends its reach to encompass the wider world of social sciences. Texts on general anthropology offer a comparative perspective, allowing you to explore the myriad ways in which societies across the globe have evolved and interacted. Books on research methodology equip students and researchers with the tools they need to delve deeper into the complexities of human societies.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Library
