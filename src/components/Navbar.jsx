

import React from 'react'

 const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 border-b-4 border-[#D46712] hidden md:block'>
      <ul className='flex flex-row gap-16  pl-10 text-xl font-medium bg-[#1b242f]
       text-white h-12 items-center' >
        <li  className='hover:text-[#00ffff]'><a href="#Hero">HOME</a></li>
        <li className='hover:text-[#00ffff]'><a href='#About'>ABOUT ME</a></li>
        <li className='hover:text-[#00ffff]'><a href='#Skills'>SKILLS</a></li>
        <li className='hover:text-[#00ffff]'><a href='#Learning'>PROJECTS</a></li>
        <li className='hover:text-[#00ffff]'><a href='#Contact'>CONTACT</a></li>

      </ul>
    </nav>
  )
}

export default Navbar
