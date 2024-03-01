import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6xkbirh', 'template_tmok6mh', form.current, {
        publicKey: 'h9izG2QFTBr4pRz1U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Your message has been sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <div className='px-4 py-5 bg-gray-200'>
        <h1 className='text-center text-black text-xl'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
            <input required type="text" placeholder='Name' name='user_name' className='my-4 mx-3 w-96 p-3' />
            <input required type="text" placeholder='Email' name='user_email' className='my-4 mx-3 w-96 p-3' />
            <textarea required name="message" cols="30" rows="10" className='my-4 mx-3 w-96 p-3' placeholder='Message'></textarea>
            <input type="submit" value="Send" className='p-5 text-white bg-yellow-600 rounded-md hover:bg-yellow-800 w-fit' />
          </form>
          <div className='text-black text-start flex flex-col mt-5'>
            <p className='pt-3'>Address : Ramanya Hall, University of Yangon (Main Campus), Pyay Road, Yangon</p>
            <p className='pt-3'>Telephone : +95 9 254077935</p>
            <p className='pt-3'>Email : dal.uy.edu@gmail.com</p>
            <p className='pt-3 animate-pulse text-red-500'> * The department is temporarily closed due to current political situations.</p>
          </div>
        </div>
      </div>
  )
}

export default Contact
