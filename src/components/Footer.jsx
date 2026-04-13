import React from 'react'
import { FOOTER } from '../constants'

const Footer = () => {
  return (
    <footer className='bg-black text-white px-40 py-20 flex flex-col gap-10 border-gray-700 border-2'>

      {/* Top — Link Columns */}
      {/* <section className='flex flex-row'> */}


        <div className='flex gap-2 flex-row justify-between border-b border-gray-800 pb-15 '>


        
          {/* links */}
          <div className='flex flex-2/3 gap-15'>
          {FOOTER.columns.map((col) => (

            <div key={col.label} className='flex flex-col justify-evenly'>
              <p className='font-bold text-white text-sm mb-1 w-fit'>{col.label}</p>

              {col.links.map((link) => (
                <a key={link.label} href={link.href}
                  className='text-gray-400 text-sm hover:text-white transition duration-200 w-fit'>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          </div>

          {/* right side */}
          <div className='flex flex-1/3'>

          </div>
        </div>

        {/* <div className='flex flex-1/3'>
          <p>hello world</p>
        </div>
      </section> */}

      {/* Bottom — Copyright + Email */}
      <div className='flex flex-row justify-between md:h-20 items-start'>

        {/* Email signup */}
        <div className='flex items-center gap-3'>
          <p className='text-gray-400 text-sm'>Stay in the loop</p>
          <input
            type='email'
            placeholder='Email'
            className='bg-gray-900 border border-gray-700 text-white text-sm px-4 py-2 rounded-sm outline-none focus:border-blue-500 transition duration-200'
          />
          <button className='bg-blue-600 text-white px-4 py-2 text-sm rounded-sm hover:bg-blue-800 transition duration-200'>
            →
          </button>
        </div>

        {/* Copyright */}
        <p className='text-gray-500 text-sm'>{FOOTER.copyright}</p>

      </div>

    </footer>
  )
}

export default Footer