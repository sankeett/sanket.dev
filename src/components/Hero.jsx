import React from 'react';
import unsplash from '../assets/unsplash.jpg';

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex flex-col justify-center items-center h-[100vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${unsplash})` }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/50 to-[#0f172a]/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Eyebrow */}
        <span className="text-[#D46712] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Full-Stack Developer
        </span>

        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Hey 👋 I'm{' '}
          <span className="text-[#D46712]">Sanket</span>
          <br />
          <span className="text-white">Golekar</span>
        </h1>

        <p className="mt-5 text-white/60 text-lg max-w-md">
          Crafting sleek, performant web experiences from front to back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 mt-8">
          <a
            href="#About"
            className="px-7 py-3 rounded-full bg-[#D46712] text-white font-semibold text-sm hover:bg-[#b8590f] transition-all duration-300 shadow-lg hover:shadow-[#D46712]/30 hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1MujSZO5sNz_-XOIXCdOrDJqCG2b5-cnG/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border-2 border-white/40 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;