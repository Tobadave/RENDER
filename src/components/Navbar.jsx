import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex gap-6 p-4 md:h-23 items-center text-white text-md justify-between md:px-20 transition-all duration-300
        ${scrolled || menuOpen ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}
      `}>

        <div className='flex font-bold md:font-extrabold text-md md:text-2xl italic uppercase px-2 py-1 md:p-0 text-blue-100'>
          orion <p className='hidden md:flex'>&nbsp;Studios</p>
        </div>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className='flex md:hidden text-white text-2xl px-2'
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <RxHamburgerMenu size={24} />
        </button>

      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-40 bg-black/50 md:hidden'
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 left-0 h-full w-[70%] z-50 bg-black/90 backdrop-blur-md flex flex-col px-8 py-8 md:hidden border-r border-white/10'
          >
            {/* Header + close */}
            <div className='flex justify-between items-center mb-10'>
              <span className='text-blue-100 font-bold italic uppercase text-xl'>
                orion Studios
              </span>
              <button onClick={() => setMenuOpen(false)}>
                <IoCloseOutline size={30} className='text-white' />
              </button>
            </div>

            {/* Links */}
            <div className='flex flex-col gap-2'>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`flex text-lg font-semibold py-4 border-b border-white/10 transition-colors duration-200
                      ${location.pathname === link.path ? 'text-blue-400' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar