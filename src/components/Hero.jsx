import React, { useTransition } from 'react';
import unsplash from '../assets/unsplash.jpg';

export const Hero = () => {
  return (
    <section
      id="Hero" className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplash})` }}
    >
      <h1 className="text-white text-5xl font-semibold text-center">
        Hey👋... I'm <span className="text-[#D46712]">Sanket Golekar</span>,<br />
        I'm a Full-Stack Developer.
      </h1>
      

      <div className='flex flex-row gap-5 mt-5'>
        <button className='hidden lg:block text-white text-2xl border-2 rounded-4xl p-[15px]
         hover:bg-[#D46712] transition-colors duration-700 ease-in-out'
         ><a href="#About">View My Work</a></button>
        <button className='hidden lg:block text-white text-2xl border-2 rounded-4xl p-[15px]
         hover:bg-[#D46712] transition-colors duration-700 ease-in-out'><a href="https://drive.google.com/file/d/1PJ1zAy536FZDdALM8iviBuorh1nhgPib/view?usp=sharing">My Resume</a></button>
      </div>
    </section>
    
  );
};

export default Hero;