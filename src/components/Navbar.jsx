// components/Navbar.jsx
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../constants'

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 md:h-25 items-center bg-black text-white text-md justify-between md:px-20 md:border md:border-gray-800">
      <div className='flex md:font-extrabold text-sm md:text-2xl italic uppercase text-blue-100'>
        orion Studios
      </div>

      <div className='gap-5 md:gap-9 font-semibold text-[15px] hidden md:flex 
        xl:border-2 border-gray-800 py-3 lg:px-7 rounded-full'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='relative text-gray-400 group hover:text-blue-500'
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