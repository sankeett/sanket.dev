import React, { useState, useEffect } from 'react'

const links = [
  { label: 'HOME', href: '#Hero' },
  { label: 'ABOUT', href: '#About' },
  { label: 'SKILLS', href: '#Skills' },
  { label: 'PROJECTS', href: '#Learning' },
  { label: 'CONTACT', href: '#Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 hidden md:block transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0f172a]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#Hero" className="text-white font-semibold text-lg tracking-wide hover:text-[#D46712] transition-colors duration-300">
          Sanket<span className="text-[#D46712]">.</span>dev
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-10">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav-link text-sm font-medium text-white/80 hover:text-[#D46712] transition-colors duration-300 tracking-wider"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
