import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-full py-72 bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1575d85d-5d25-4d12-925b-8d0d2a4b407d" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4 text-lg'> Submit the form below or shoot me an email --> sampbeal@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-8 text-xl'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact