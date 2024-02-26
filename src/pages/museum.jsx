import React from 'react'
import image from '../assets/image.png'

function Museum() {
  return (
    <div>
      <div className='flex flex-col text-start px-1 md:px-10'>
        <h1 className='py-10 text-3xl'>Anthropology Museum</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          <p className='overscroll-auto w-auto'>Department of Anthropology museum beckons visitors on a journey through the rich tapestry of Myanmar's diverse ethnic groups. Though small in size, the space brims with the stories and traditions of a vibrant land, meticulously curated within its intimate halls. The museum's heart lies in its collection of ancient tools. Here, timeworn stones used for grinding grain whisper of daily life in long-ago villages, while delicately chipped arrowheads hint at the skills of hunters who once roamed Myanmar's lush landscapes. Each tool, though unassuming, paints a vivid picture of ingenuity, resourcefulness, and the deep connection between the people and their environment.</p>
          <h1 className='w-auto'>Image</h1>
        </div>

        <div className='py-10 grid md:grid-cols-2 gap-4'>
          <div>
            <img src={image} alt="Image" />
          </div>
          <p className='overscroll-auto w-auto'>Alongside these practical implements, the museum showcases a treasure trove of artifacts. Intricate pottery, adorned with geometric patterns or stylized depictions of animals, speaks to the artistic expression that flourished within different communities. Woven baskets, their fibers weathered with time, demonstrate the intricate techniques passed down through generations. While the museum's physical collection may be modest, its impact is profound. It serves as a poignant reminder of the vast diversity within Myanmar's borders, highlighting the unique customs, beliefs, and ways of life that have shaped this fascinating nation. By carefully showcasing these artifacts, the museum invites visitors to step beyond the familiar and appreciate the intricate beauty and enduring strength of Myanmar's diverse ethnic communities. It's a place where the past comes alive, inspiring respect, empathy, and a deeper understanding of the incredible human mosaic that makes up Myanmar.</p>
        </div>
      </div>
    </div>
  )
}

export default Museum
