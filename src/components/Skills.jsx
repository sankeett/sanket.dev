import React from 'react'
import html from '../assets/html.svg'
import Css from '../assets/Css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import Tailwind from '../assets/Tailwind.svg'
import Node from '../assets/Node.svg'
import Mongodb from '../assets/Mongodb.svg'
import ejs from '../assets/ejs.svg'
import postgresql from '../assets/postgresql.svg'
import express from '../assets/express.svg'
import aws from '../assets/aws.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import vercel from '../assets/vercel.svg'
import postman from '../assets/postman.png'

const categories = [
  {
    label: 'Front-End',
    skills: [
      { name: 'HTML5', icon: html },
      { name: 'CSS3', icon: Css },
      { name: 'JavaScript', icon: js },
      { name: 'React', icon: react },
      { name: 'Tailwind', icon: Tailwind },
    ],
  },
  {
    label: 'Back-End',
    skills: [
      { name: 'Node.js', icon: Node },
      { name: 'Express', icon: express },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'MongoDB', icon: Mongodb },
      { name: 'EJS', icon: ejs },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'AWS', icon: aws },
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
      { name: 'Vercel', icon: vercel },
      { name: 'Postman', icon: postman },
    ],
  },
]

const SkillCard = ({ name, icon }) => (
  <div className="group flex flex-col items-center gap-3 bg-white rounded-2xl px-5 py-6 shadow-sm border border-[#0f172a]/6 hover:border-[#D46712]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[100px]">
    <div className="w-11 h-11 flex items-center justify-center">
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <span className="text-xs font-medium text-[#64748b] group-hover:text-[#D46712] text-center transition-colors duration-300 leading-tight">
      {name}
    </span>
  </div>
)

const Skills = () => {
  return (
    <section id="Skills" className="w-full bg-[#faf8f5] py-24">
      {/* Section header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#0f172a] tracking-tight">Skills</h1>
        <div className="mt-3 mx-auto w-16 h-1 bg-[#D46712] rounded-full" />
        <p className="mt-5 text-[#64748b] text-base max-w-md mx-auto">
          Technologies I work with across the full stack.
        </p>
      </div>

      {/* All categories always visible */}
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {categories.map((cat, idx) => (
          <div key={cat.label}>
            {/* Category label row */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D46712] whitespace-nowrap">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-[#0f172a]/10" />
            </div>

            {/* On mobile — horizontal scroll strip */}
            <div className="flex gap-4 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible scrollbar-hide">
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
