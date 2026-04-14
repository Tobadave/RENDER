import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ABOUT_SECTION, HERO_SECTION, HERO_STATS } from '../constants'
import heroVideo from '../media/testvideo.mp4'
import gamecover from '../media/game-cover.jpg'
import blend from '../media/blend.jpg'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

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
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className='
        relative flex flex-row items-center
        py-40 md:py-75 md:min-h-[50vh] bg-black
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

        {/* BUTTONS */}
          <div className='flex mx-auto md:mx-0 flex-col md:flex-row gap-2 md:gap-4 md:font-bold mt-10 md:mt-5'>
            <button onMouseMove={handleMouseMove}
              className='btn-track bg-blue-600 text-white md:w-55 px-15 md:px-10 py-4 md:py-6 rounded-full hover:cursor-pointer hover:bg-blue-800'>
              {HERO_SECTION.cta}
            </button>
            <button onMouseMove={handleMouseMove}
              className='btn-track border border-white/40 text-white/70 md:w-55 px-15 md:px-10 py-4 md:py-6 rounded-full hover:cursor-pointer'>
              {HERO_SECTION.ctaSecondary}
            </button>
          </div>

        {/* LIVE NUMBER STATS */}
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

            {/* Glow underneath — offset downward to peek out */}
            <div className='pointer-events-none absolute top-6 left-6 right-0 bottom-0 w-full h-full bg-blue-500 blur-[50px] opacity-30 z-0 rounded-lg scale-90' />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className='min-h-[50vh] bg-linear-to-b from-black to-gray-800 px-10 md:px-35 text-white pb-10'>

        <AnimatePresence mode='wait'>
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className='flex justify-center py-8 text-xl md:text-4xl text-gray-300 font-semibold'
          >
            Get to know&nbsp;
            <span className='text-blue-500 italic'>{phrases[index]}</span>
          </motion.p>
        </AnimatePresence>

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
              <button className='items-center flex gap-2 flex-row bg-blue-600 font-semibold p-3 px-5 mt-5 text-sm hover:cursor-pointer hover:bg-blue-700 rounded-full'>
                Read More <BsArrowUpRightCircleFill size={20} color='white' />
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
      <section className='min-h-[50vh] bg-gray-800 px-35 text-white py-5 flex flex-col gap-2 items-center justify-center'>
        <span className='flex flex-1/4 flex-col md:flex-row justify-center w-full px-10 py-15'>
            <p className='md:text-6xl md:font-bold'>
              Build experiences like never before</p>
        </span>
        <span className='flex flex-3/4 flex-col md:flex-row w-full h-full p-10 gap-25'>

          {/* LEFT SECTION */}
          <div className='flex flex-1/2'>
              <img src={blend} alt="" className='
              w-full rounded-xl shadow-2xl opacity-80 hover:opacity-100' />
          </div>

          {/* RIGHT SECTION */}
          <div className='flex flex-1/2 flex-col'>
              <p className='flex flex-1/4 text-blue-600 text-4xl font-bold'>
                  Advanced AI Modelled Targetting
              </p>
              <div className='flex flex-3/4 text-[20px] pb-15'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eveniet inventore neque repellat, similique commodi fugit nulla corrupti delectus cum minima itaque distinctio illo sed blanditiis aspernatur, aliquam perspiciatis dolores exercitationem ipsam non? Maiores accusantium itaque, esse facere est hic et libero, neque praesentium molestias voluptates. Sapiente voluptatem commodi iure fuga alias numquam unde voluptatum.
              </div>
          </div>
          
        </span>
      </section>

      {/* ── CTA — hidden ── */}
      <section className=' min-h-[50vh] bg-linear-to-b from-gray-800 to-black px-35 text-white pt-5 flex flex-col gap-12 items-center justify-center'>
        <h1 className=' md:text-5xl font-medium bg-linear-to-r from-blue-500 via-purple-700 to-blue-800 bg-clip-text mt-20 text-transparent bg-size-[200%] animate-[gradient_3s_ease_infinite]'>
          Ready to Build beyond reality?
        </h1>
        <button className='bg-blue-600 px-8 py-4 mt-0 rounded-lg hover:cursor-pointer text-sm font-bold hover:bg-blue-800 transition-all duration-200'>
          Start your project here
        </button>
      </section>
    </>
  )
}

export default Home