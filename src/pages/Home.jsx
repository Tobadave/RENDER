import React from 'react'
import { HERO_SECTION, HERO_STATS } from '../constants'
import heroVideo from '../media/testvideo.mp4'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <>
      <section className='
        relative flex flex-row items-center min-h-[80vh] bg-black px-35 overflow-visible
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-size-[60px_60px]
      '>

        {/* Background orb glow */}
        <div className='absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20 -z-10' />

        {/* LEFT SECTION */}
        <div className='w-1/2 flex flex-col items-start text-left text-white'>

          {/* Badge */}
          <span className='text-blue-400 border border-blue-400 rounded-full px-4 py-1 text-sm mb-6'>
            XR & Game Design Studio
          </span>

          <h1 className='text-6xl font-bold mb-6 leading-tight'>{HERO_SECTION.headline}</h1>
          <p className='text-lg text-gray-400 max-w-xl mb-8'>{HERO_SECTION.subtext}</p>

          {/* Buttons */}
          <div className='flex gap-4 font-semibold'>
            <button className='bg-blue-600 text-white px-10 py-5 rounded-sm hover:cursor-pointer hover:bg-blue-800 duration-200'>
              {HERO_SECTION.cta}
            </button>
            <button className='border border-blue-600 text-blue-600 px-10 py-5 rounded-sm hover:cursor-pointer hover:bg-blue-600 hover:text-white duration-200'>
              {HERO_SECTION.ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div className='flex gap-10 mt-18'>
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <span className='text-gray-400 font-bold text-2xl'>{stat.value}</span>
                <p className='text-gray-400 text-sm'>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className='w-1/2 flex items-center justify-center overflow-visible'>
          <div className='relative h-full w-full rounded-lg overflow-visible'>

            {/* Main video */}
            <video autoPlay loop muted className='w-full h-full object-cover rounded-lg relative z-10'>
              <source src={heroVideo} type='video/mp4' />
            </video>

            {/* Ambient video glow */}
            <video autoPlay loop muted
              className='absolute top-4 left-4 w-full h-full object-cover rounded-lg blur-3xl opacity-70 z-0'>
              <source src={heroVideo} type='video/mp4' />
            </video>

            {/* Animated blue glow */}
            <div className='absolute top-4 left-4 w-full h-full bg-blue-500 blur-3xl opacity-10 z-0 animate-glow' />

          </div>
        </div>

      </section>
      <section className=''>

      </section>
    </>
  )
}

export default Home