import React from 'react'
import Netflix from '../assets/Netflix.jpg'
import crypto from '../assets/crypto.jpg'
import dietitian from '../assets/dietitian.jpg'
import weather from '../assets/weather.jpg'
import textconverter from '../assets/textconverter.jpg'
import razorpay from '../assets/razorpay.jpg'

const Learning = () => {
  return (
    <section id='Learning' className='w-full h-[100%] mb-7 bg-emerald-50'>
      <div className='text-5xl font-medium flex justify-center text-[#252934] pt-10 '>
           <h1 className='mt-6'>PROJECTS</h1>
        </div>
        <div className='w-1/10 h-1 bg-[#252934] mt-3 ml-[44vw]'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 max-w-[900px] w-[90%] md:w-[85%] lg:w-[80%] mx-auto opacity-100 md:opacity-100'>

      <div className="relative group">
  <img
    src={dietitian}
    alt="Netflix Clone"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Dietitan's Site</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://github.com/sankeett/dietitianvarsha'>Github</a>
      </button>
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://dietitianvarsha.vercel.app/'>Demo</a>
      </button>
    </div>
  </div>
</div>
      <div className="relative group">
  <img
    src={Netflix}
    alt="Netflix Clone"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Netflix Clone</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href="https://github.com/sankeett/react-netflix-clone">Github</a>
      </button>
      {/* <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href="https://react-netflix-clone-by-sanket.vercel.app/">Demo</a>
      </button> */}
    </div>
  </div>
</div>
<div className="relative group">
  <img
    src={crypto}
    alt="crypto"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Crypto Tracker</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href="https://github.com/sankeett/cypto-price-tracker">Github</a>
      </button>
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href="https://cypto-price-tracker.vercel.app/">Demo</a>
      </button>
    </div>
  </div>
</div>

<div className="relative group hidden md:block">
  <img
    src={weather}
    alt="weather app"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Weather App</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://github.com/sankeett/weatherapp'>Github</a>
      </button>
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://weatherapp-khaki-one.vercel.app/'>Demo</a>
      </button>
    </div>
  </div>
</div>
<div className="relative group hidden md:block">
  <img
    src={textconverter}
    alt="textconverter"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Text Converter</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://github.com/sankeett/textToSpeech'>Github</a>
      </button>
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://text-to-speech-sand-six.vercel.app'>Demo</a>
      </button>
    </div>
  </div>
</div>
<div className="relative group hidden md:block">
  <img
    src={razorpay}
    alt="razorpay"
    className="w-full h-full object-cover md:group-hover:opacity-75 opacity-40 md:opacity-100"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-0 md:group-hover:bg-opacity-60 transition-opacity md:opacity-0 md:group-hover:opacity-100">
    <h2 className="text-2xl font-semibold mb-4 text-black">Razorpay Frontend</h2>
    <div className="flex gap-4">
      <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        <a href='https://github.com/sankeett/razorpayclone'>Github</a>
      </button>
      {/* <button className="bg-[#252934] hover:bg-[#3a3f4a] text-white px-4 py-2 rounded-md transition-colors">
        Demo
      </button> */}
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Learning
