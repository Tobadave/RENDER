import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ABOUT_SECTION, HERO_SECTION, HERO_STATS } from '../constants'
import heroVideo from '../media/testvideo.mp4'
import gamecover from '../media/game-cover.jpg'

const phrases = ['our story', 'our drive', 'our vision', 'our culture']

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

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
      {/* ── HERO ── */}
      <section className='
        relative flex flex-row items-center
        py-40 md:py-60 md:min-h-[50vh] bg-black
        px-10 md:px-35 overflow-hidden
      '>
        {/* Grid background */}
        <div className='pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-size-[60px_60px]'
        />

        {/* Orb glow — static, no animation */}
        <div className='pointer-events-none absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-15' />

        {/* LEFT */}
        <div className='md:w-1/2 flex flex-col items-start text-left text-white'>

          <span className='hidden md:flex items-center text-blue-400 border border-blue-600 rounded-full px-4 py-1 text-[12px] mb-10'>
            Leading XR | Game Design Studio
          </span>

          <h1 className='text-center md:text-left text-4xl md:text-6xl font-bold mb-3 leading-tight'>
            {HERO_SECTION.headline}
          </h1>
          <p className='text-center md:text-left text-md md:text-lg text-gray-400 md:max-w-xl mb-2'>
            {HERO_SECTION.subtext}
          </p>

          <div className='flex mx-auto md:mx-0 flex-col md:flex-row gap-2 md:gap-4 md:font-bold mt-10 md:mt-5'>
            <button onMouseMove={handleMouseMove}
              className='btn-track bg-blue-600 text-white md:w-50 px-15 md:px-10 py-4 md:py-6 rounded-sm hover:cursor-pointer hover:bg-blue-800'>
              {HERO_SECTION.cta}
            </button>
            <button onMouseMove={handleMouseMove}
              className='btn-track border border-white md:w-50 px-15 md:px-10 py-4 md:py-6 rounded-sm hover:cursor-pointer'>
              {HERO_SECTION.ctaSecondary}
            </button>
          </div>

          <div className='flex gap-10 mt-40 md:mt-10 mx-auto md:mx-0 justify-center md:text-left'>
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <span className='text-gray-400 font-bold text-xl md:text-2xl'>{stat.value}</span>
                <p className='text-gray-500 text-sm'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — single video only */}
        <div className='w-1/2 hidden md:flex items-center justify-center'>
          <div className='relative w-full rounded-lg'>
            <video autoPlay loop muted playsInline
              style={{ transform: 'translateZ(0)' }}
              className='w-full h-full object-cover rounded-lg relative z-10'>
              <source src={heroVideo} type='video/mp4' />
            </video>
            {/* Static glow only — no duplicate video */}
            <div className='pointer-events-none absolute inset-0 bg-blue-500 blur-3xl opacity-70 -z-10 rounded-lg' />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className='min-h-[50vh] bg-linear-to-b from-black to-gray-800 px-10 md:px-35 text-white pb-10'>

        <p className='flex flex-col md:flex-row items-center justify-center py-5 text-xl md:text-4xl text-gray-300 font-semibold'>
          Get to know&nbsp;
          <motion.div layout className='inline-flex overflow-hidden text-3xl md:text-4xl'>
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

        <div className='flex flex-col md:flex-row gap-3 p-10'>

          {/* Left box */}
          <div className='flex flex-1 flex-col rounded-lg bg-[#141414] text-white'>
            <div className='p-5 pt-3'>
              <div className='relative'>
                <img src={gamecover} alt=""
                  className='w-full h-15 object-cover rounded-t-lg blur-2xl'
                />
                <p className='absolute bottom-2 left-2 text-gray-200 z-10 md:text-3xl font-semibold'>Our Story</p>
              </div>
            </div>
            <div className='flex flex-col px-8 text-gray-400'>
              {ABOUT_SECTION.paragraphs.map((p, i) => (
                <p key={i} className='mb-4 sm:text-lg'>{p}</p>
              ))}
            </div>
            <div className='px-8 pb-8'>
              <button className='bg-blue-600 font-bold p-3 mt-5 hover:cursor-pointer hover:bg-blue-700 rounded-md px-6'>
                Read More...
              </button>
            </div>
          </div>

          {/* Right boxes */}
          <div className='flex flex-1 flex-col gap-2'>
            <div className='flex flex-1 flex-col rounded-lg bg-[#141414]'>
              <div className='p-5 pt-3'>
                <div className='relative'>
                  <img src={gamecover} alt=""
                    className='w-full h-14 object-cover rounded-t-lg blur-2xl'
                  />
                  <p className='absolute bottom-2 left-2 text-gray-200 z-10 text-2xl font-semibold'>Our Mission</p>
                </div>
              </div>
            </div>

            <div className='flex flex-1 flex-col rounded-lg bg-[#141414]'>
              <div className='p-5 pt-3'>
                  <p className=' text-gray-200 z-10 text-2xl font-semibold'>Aim & Objectives</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── EMPTY SECTION ── */}
      <section className='min-h-[50vh] bg-gray-800 px-35 text-white py-5 flex flex-col gap-12 items-center justify-center' />

      {/* ── CTA — hidden ── */}
      <section className='hidden min-h-[50vh] bg-gray-800 px-35 text-white py-5 flex flex-col gap-12 items-center justify-center'>
        <h1 className='text-7xl font-medium bg-gradient-to-r from-blue-500 via-purple-700 to-blue-800 bg-clip-text text-transparent bg-[length:200%] animate-[gradient_3s_ease_infinite]'>
          Ready to Build beyond reality?
        </h1>
        <button className='bg-blue-600 px-10 py-5 mt-2 rounded-lg hover:cursor-pointer font-bold hover:bg-blue-800 transition-all duration-200'>
          Start your project
        </button>
      </section>
    </>
  )
}

export default Home