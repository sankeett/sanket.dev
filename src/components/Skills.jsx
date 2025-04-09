

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


const Skills = () => {
  return (
    <section id='Skills' className='w-full h-[100%] pb-16 bg-[#FFF5EE] hidden md:block'>
        <div className='text-5xl font-medium flex justify-center text-[#252934] pt-12'>
           <h1 className='mt-6'>SKILLS</h1>
        </div>
        <div className='w-1/16 h-1 bg-[#252934] mt-3 ml-[47vw]'></div>

        <div>
             
            <ul className='flex mt-16'>
                <li className='ml-[7vw] text-5xl'>Front-End :</li>
                <div className='flex gap-26 ml-8'>
                <li><img src={html} alt="html-logo" height="60px" width="60px" /></li>
                <li><img src={Css} alt="css-logo" height="60px" width="60px" /></li>
                <li><img src={js} alt="js-logo" height="60px" width="60px" /></li>
                <li><img src={react} alt="react-logo" height="60px" width="60px" /></li>
                <li><img src={Tailwind} alt="tailwind-logo" height="60px" width="60px" /></li>
                </div>
            </ul>
        </div>

        <div>
             
            <ul className='flex mt-20'>
                <li className='ml-[7vw] text-5xl'>Back-End :</li>
                <div className='flex gap-26 ml-10'>
                <li><img src={Node} alt="html-logo" height="80px" width="80px" /></li>
                <li><img src={express} alt="css-logo" height="60px" width="60px" /></li>
                <li><img src={postgresql} alt="js-logo" height="60px" width="60px" /></li>
                <li><img src={Mongodb} alt="react-logo" height="60px" width="60px" /></li>
                <li><img src={ejs} alt="tailwind-logo" height="60px" width="60px" /></li>
                </div>
            </ul>
        </div>

        <div>
             
            <ul className='flex mt-20'>
                <li className='ml-[7vw] text-5xl'>Devops :</li>
                <div className='flex gap-26 ml-8'>
                <li><img src={aws} alt="html-logo" height="60px" width="60px" /></li>
                <li><img src={git} alt="css-logo" height="60px" width="60px" /></li>
                <li><img src={github} alt="js-logo" height="60px" width="60px" /></li>
                <li><img src={vercel} alt="react-logo" height="60px" width="60px" /></li>
                <li><img src={postman} alt="tailwind-logo" height="60px" width="60px" /></li>
                </div>
            </ul>
        </div>
    </section>

    
  )
}

export default Skills
