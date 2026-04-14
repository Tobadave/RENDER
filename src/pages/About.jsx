import React from 'react'
import bg from "../media/blend.jpg"

const About = () => {
  return (
    <>
      {/* Hero Image with text overlay */}
      <div className='relative h-[40vh]'>
        <img src={bg} alt="" className='w-full h-full object-cover' />
        
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/40' />

        {/* Centered text on image */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-white text-5xl md:text-7xl font-black text-center px-10 leading-tight drop-shadow-lg'>
            Get To Know <br /> Our Story
          </h1>
        </div>
      </div>

      {/* Floating white card overlapping the image */}
      <div className='relative z-10 bg-white text-gray-800 mx-10 md:mx-35 -mt-16 rounded-sm shadow-xl p-10'>
        <p className='text-lg leading-relaxed'>
          Your content goes here...
        </p>
      </div>

      {/* Content below */}
      <div className='px-10 md:px-35 py-10'>
      </div>
    </>
  )
}

export default About