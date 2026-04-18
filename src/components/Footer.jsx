import React from 'react'
import { FOOTER } from '../constants'

const Footer = () => {
  return (
    <footer className='bottom-0 bg-black text-white px-10 md:px-40 py-10 md:py-20 flex flex-col gap-10 border-gray-700'>

      {/* Top — Link Columns */}
      {/* <section className='flex flex-row'> */}


        <div className='px-4 md:px-0 flex gap-2 flex-row justify-between md:justify-normal border-b border-gray-800 pb-15 '>


        
        <div className='flex flex-2/3 gap-10 md:gap-20 justify-start flex-wrap'>

          {FOOTER.columns.map((col) => (
            <div key={col.label} className='flex flex-col items-start gap-2 w-[40%] md:w-auto'>
              
              <p className='font-semibold md:font-bold text-blue-500/60 text-[17px] mb-2 md:text-[18px]'>{col.label}</p>

              {col.links.map((link) => (
                <a key={link.label} href={link.href}
                  className='text-gray-400 text-[14px] hover:text-white transition duration-200'>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

          {/* right side */}
          <div className='hidden md:flex flex-1/3'>

          </div>
        </div>

        {/* <div className='flex flex-1/3'>
          <p>hello world</p>
        </div>
      </section> */}

      {/* Bottom — Copyright + Email */}
      <div className='flex flex-col md:flex-row justify-between md:h-auto items-start'>

        {/* Email signup */}
        <div className='w-full md:w-fit flex flex-col gap-3'>
            <p className='flex w-fit text-gray-400 text-sm md:text-lg md:font-semibold'>
              Subscribe to our Newsletter
            </p>

            
            <div className='md:min-w-120 flex flex-row gap-1'>

              <input
                type='email'
                placeholder='Enter your e-mail'
                className='flex-3/4 bg-gray-900 border border-gray-700 text-white text-sm px-4 py-3 rounded-sm outline-none focus:border-blue-500 transition duration-200'
              />
              <button className='bg-blue-600 text-gray-200 md:font-semibold hover:cursor-pointer px-4 py-2 text-sm rounded-sm hover:bg-blue-800 transition duration-200'>
                {/* → */}
                Subscribe
              </button>
            </div>

        </div>

        {/* Copyright */}
        <div className='justify-center flex md:mx-0 mx-auto'>
          <p className='py-7 text-gray-500 text-sm'>{FOOTER.copyright}</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer