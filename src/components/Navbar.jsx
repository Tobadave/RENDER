// components/Navbar.jsx
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../constants'

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 h-25 items-center bg-black text-white text-lg justify-between md:px-20">
      <div className='flex font-extrabold'>
        NextSimulations
      </div>

      <div className='gap-5 md:gap-9 font-semibold hidden md:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='relative text-white group transition-colors duration-200 hover:text-blue-500'
          >
            {link.label}
            {/* Underline animation */}
            {/* <span className='absolute -bottom-1 left-0 w-0 h- bg-blue-500 transition-all duration-300 group-hover:w-full' /> */}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar