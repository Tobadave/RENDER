import React from 'react'
import { ABOUT_SECTION, HERO_SECTION, HERO_STATS } from '../constants'
import heroVideo from '../media/testvideo.mp4'
import gamecover from '../media/game-cover.jpg'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import CountUp from 'react-countup'
// ABOUT_SECTION


const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const phrases = ['our story', 'our drive', 'our vision', 'our culture']

// const About = () => {



const Home = () => {
    const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    {/* TOP HERO SECTION */}
    <section className=''>
      <section className='
        relative flex flex-row items-center py-60 min-h-[50vh] bg-black px-35 overflow-visible
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-size-[60px_60px]
      '>

        {/* Background orb glow */}
        <div className='absolute top-20 left-20 w-30 h-30 bg-blue-600 rounded-full blur-[10px] opacity-10 z-10' />

        {/* LEFT SECTION */}
        <div className='w-1/2 flex flex-col items-start text-left text-white'>

          {/* Badge */}
          <span className='text-blue-400 border border-blue-600 rounded-full px-4 py-1 text-[11px] mb-10'>
          Leading XR | Game Design Studio
          </span>

          <h1 className='text-6xl font-bold mb-3 leading-tight'>{HERO_SECTION.headline}</h1>
          <p className='text-lg text-gray-400 max-w-xl mb-2'>{HERO_SECTION.subtext}</p>

          {/* Buttons */}
          <div className='flex gap-4 font-bold mt-12'>
            <button
              onMouseMove={handleMouseMove}
              className='btn-track bg-blue-600 text-white md:w-50 px-10 py-6 rounded-sm hover:cursor-pointer hover:bg-blue-800'>
              {HERO_SECTION.cta}
            </button>

            <button
              onMouseMove={handleMouseMove}
              className='btn-track border border-white md:w-50 text-white px-10 py-6 rounded-sm hover:cursor-pointer duration-200'>
              {HERO_SECTION.ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div className='flex gap-10 mt-10'>
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <span className='text-gray-400 font-bold text-2xl'>{stat.value}</span>
                <p className='text-gray-500 text-sm'>{stat.label}</p>
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
      


      {/* WHO WE ARE SECTION */}
      <section className='min-h-[50vh] bg-linear-to-b  from-black to-gray-800 px-35 text-white pb-10'>

        {/* Large Header */}
        <p className='items-center flex justify-center py-5 text-4xl text-gray-300 font-semibold'>
          Get to know&nbsp;
          <motion.div layout className='inline-flex overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className='text-blue-500 italic whitespace-nowrap'
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </p>

        {/* Box container */}
        <div className='flex flex-row h-[50%] gap-3 p-10'>

            {/* left section */}
            <div className='flex flex-1/2 flex-col rounded-lg bg-[#141414] text-white'>
                <div className='flex flex-col p-3'>
                  <div className='relative'>
                    <img src={gamecover} alt=""
                      className='w-full h-20 object-cover rounded-t-lg'
                    />
                    <p className='absolute bottom-2 left-2 text-gray-200 z-10 text-3xl font-semibold my-4'>Our Story</p>
                  </div>
                </div>

                {/* text */}
                <div className='flex flex-2/3 flex-col  items-center px-5 pt-0 text-gray-400'>
                  {ABOUT_SECTION.paragraphs.map((p, index) => (
                    <p key={index} className='mb-4'>{p}</p>
                  ))}
                </div>
                <div className='flex flex-1/4 h-10 p-5'>
                  <button className='bg-blue-600 p-3 hover:cursor-pointer hover:bg-blue-700 rounded-md text-sm px-4'>
                    Read More...
                  </button>
                </div>
            </div>

            {/* right section */}
            <div className='flex flex-1/2 flex-col gap-2'>
                <div className='flex flex-1/2 rounded-lg  bg-[#141414]'>

                </div>
                <div className='flex flex-1/2 rounded-lg  bg-[#141414]'>

                </div>

            </div>
        </div>
      </section>

      <section className='min-h-[40vh] bg-gray-800 px-35 text-white py-5'>

      </section>

    </section>
    </>
  )
}

export default Home