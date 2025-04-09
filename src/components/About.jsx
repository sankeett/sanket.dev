import React from 'react';
import workimg from '../assets/workimg.avif';

const About = () => {
  return (
    <section id='About'>
      <div className='text-5xl font-medium flex justify-center pt-14 text-[#252934]'>
        <h1>About Me</h1>
      </div>
      <div className='w-1/12 h-1 bg-[#252934] mt-3 mx-auto'></div>

      <div className='flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-4'>
        <div className='w-full md:w-1/2'>
          <div className='mt-6 md:ml-8'>
            <h4 className='text-2xl text-[#252934]'>Who am I?</h4>
            <div className='w-1/7 h-0.5 bg-[#252934] ml-3'></div>
          </div>

          <div className='pb-8 mt-6 text-lg italic text-[#1e2426] leading-8 md:ml-8 '>
            <p>
              I'm a full-stack developer based in Chandigarh, turning coffee into code and
              pixels into perfection. With a passion for creating sleek user-friendly 
              designs, I love bringing ideas to life on the web. Fun fact: I can type at
              over 120 words per minute—perfect for when inspiration strikes and I need 
              to capture ideas before they escape! When I'm not coding, you'll find me 
              playing badminton or exploring the latest tech trends.
            </p>
          </div>
          <button className='hidden lg:block mt-6 text-lg text-[#1e2426] border-2 rounded-full
            py-1.5 px-4 hover:bg-[#1e2426] hover:text-white block mx-auto md:ml-8 cursor-pointer'>
            <a href="#Learning">My Projects</a>
          </button>
        </div>

        <div className='hidden lg:block w-full md:w-1/2 mt-6 md:mt-0 px-5 bg-transparent '>
          <img src={workimg} alt="man-working" className='max-w-full h-auto mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;