import React from 'react'
import Netflix from '../assets/Netflix.jpg'
import crypto from '../assets/crypto.jpg'
import dietitian from '../assets/dietitian.jpg'
import weather from '../assets/weather.jpg'
import textconverter from '../assets/textconverter.jpg'
import razorpay from '../assets/razorpay.jpg'

const projects = [
  {
    title: "Dietitian's Site",
    image: dietitian,
    tags: ['React', 'Tailwind', 'Vercel'],
    github: 'https://github.com/sankeett/dietitianvarsha',
    demo: 'https://dietitianvarsha.vercel.app/',
  },
  {
    title: 'Netflix Clone',
    image: Netflix,
    tags: ['React', 'Firebase', 'TMDB API'],
    github: 'https://github.com/sankeett/react-netflix-clone',
    demo: null,
  },
  {
    title: 'Crypto Tracker',
    image: crypto,
    tags: ['React', 'CoinGecko API', 'Chart.js'],
    github: 'https://github.com/sankeett/cypto-price-tracker',
    demo: 'https://cypto-price-tracker.vercel.app/',
  },
  {
    title: 'Weather App',
    image: weather,
    tags: ['JavaScript', 'OpenWeather API'],
    github: 'https://github.com/sankeett/weatherapp',
    demo: 'https://weatherapp-khaki-one.vercel.app/',
  },
  {
    title: 'Text Converter',
    image: textconverter,
    tags: ['React', 'Web Speech API'],
    github: 'https://github.com/sankeett/textToSpeech',
    demo: 'https://text-to-speech-sand-six.vercel.app',
  },
  {
    title: 'Razorpay Frontend',
    image: razorpay,
    tags: ['HTML', 'CSS', 'Tailwind'],
    github: 'https://github.com/sankeett/razorpayclone',
    demo: null,
  },
]

const ProjectCard = ({ title, image, tags, github, demo }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-[#0f172a]/6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
    {/* Image */}
    <div className="relative overflow-hidden h-52">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/10 to-transparent" />
    </div>

    {/* Card body */}
    <div className="p-5">
      <h3 className="text-base font-semibold text-[#0f172a] mb-3">{title}</h3>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#faf8f5] text-[#D46712] border border-[#D46712]/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-semibold py-2.5 rounded-xl border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all duration-300"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-semibold py-2.5 rounded-xl bg-[#D46712] text-white hover:bg-[#b8590f] transition-all duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
)

const Learning = () => {
  return (
    <section id="Learning" className="w-full bg-[#faf8f5] py-24">
      {/* Section header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#0f172a] tracking-tight">Projects</h1>
        <div className="mt-3 mx-auto w-16 h-1 bg-[#D46712] rounded-full" />
        <p className="mt-5 text-[#64748b] text-base max-w-md mx-auto">
          A selection of things I've built — from full-stack apps to UI clones.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Learning
