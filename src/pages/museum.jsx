import React from 'react'
import Footer from '../components/footer'
import image from '../assets/image.png'

function Museum() {
  return (
    <div>
      <div className='flex flex-col text-start px-1 md:px-10'>
        <h1 className='py-10 text-3xl'>Anthropology Museum</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          <p className='overscroll-auto w-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae, quo incidunt sint repellat saepe doloremque ex unde a atque obcaecati commodi facere soluta, architecto eaque cupiditate nihil quasi illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ratione suscipit dolore facere consectetur quaerat, voluptate architecto id quidem iste officia aliquid mollitia deserunt illum at omnis ab impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi, dolorum iste fuga hic vero magni unde dignissimos distinctio sint amet libero aspernatur sunt ea quam! Nisi molestias quod doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore quo repellendus, fuga labore voluptas ut delectus numquam unde maxime dolore perspiciatis explicabo quae iure rerum esse. At, eveniet commodi.</p>
          <h1 className='w-auto'>Image</h1>
        </div>

        <div className='py-10 grid md:grid-cols-2 gap-4'>
          <div>
            <img src={image} alt="Image" />
          </div>
          <p className='overscroll-auto w-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae, quo incidunt sint repellat saepe doloremque ex unde a atque obcaecati commodi facere soluta, architecto eaque cupiditate nihil quasi illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ratione suscipit dolore facere consectetur quaerat, voluptate architecto id quidem iste officia aliquid mollitia deserunt illum at omnis ab impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi, dolorum iste fuga hic vero magni unde dignissimos distinctio sint amet libero aspernatur sunt ea quam! Nisi molestias quod doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore quo repellendus, fuga labore voluptas ut delectus numquam unde maxime dolore perspiciatis explicabo quae iure rerum esse. At, eveniet commodi.</p>
        </div>

        <div className='py-10 grid md:grid-cols-2 gap-4'>
          <p className='overscroll-auto w-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae, quo incidunt sint repellat saepe doloremque ex unde a atque obcaecati commodi facere soluta, architecto eaque cupiditate nihil quasi illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos ratione suscipit dolore facere consectetur quaerat, voluptate architecto id quidem iste officia aliquid mollitia deserunt illum at omnis ab impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi, dolorum iste fuga hic vero magni unde dignissimos distinctio sint amet libero aspernatur sunt ea quam! Nisi molestias quod doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur inventore quo repellendus, fuga labore voluptas ut delectus numquam unde maxime dolore perspiciatis explicabo quae iure rerum esse. At, eveniet commodi.</p>
          <h1 className='w-auto'>Image</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Museum
