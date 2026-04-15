import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex gap-6 p-4 md:h-23 items-center text-white text-md justify-between md:px-20 transition-all duration-300
      ${scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}
    `}>

      <div className='flex md:font-extrabold text-sm md:text-2xl italic uppercase text-blue-100'>
        orion Studios
      </div>

      <div className='gap-5 md:gap-2 text-[15px] hidden md:flex
        xl:border border-gray-900 py-1 lg:px-2 rounded-full relative'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='relative text-white min-w-25 py-2 font-semibold mx-auto justify-center flex rounded-full z-10'
          >
            {location.pathname === link.path && (
              <motion.div
                layoutId='pill'
                className='absolute inset-0 bg-blue-700/40 rounded-full -z-10'
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {link.label}
          </Link>
        ))}
      </div>

    </nav>
  )
}

export default Navbar