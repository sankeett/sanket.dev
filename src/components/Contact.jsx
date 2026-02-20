import React from 'react'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sanket-golekar-600578217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    label: 'X.com',
    href: 'https://x.com/sanketreacts?s=21',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sankeett',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sanket.1817?igsh=MTVweGpqZmlyMTJncQ%3D%3D&utm_source=qr',
  },
]

const Contact = () => {
  return (
    <footer id="Contact" className="w-full bg-[#0f172a] py-14">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <span className="text-[#D46712] text-xs font-semibold tracking-[0.3em] uppercase mb-2">Let's connect</span>
        <h2 className="text-3xl font-bold text-white mb-8">Find me on the internet</h2>

        {/* Social links */}
        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-[#D46712] hover:text-[#D46712] transition-all duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-white/30 text-xs tracking-widest uppercase">
          Sanket Golekar © 2025
        </p>
      </div>
    </footer>
  )
}

export default Contact
