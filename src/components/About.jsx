import React from 'react';
import workimg from '../assets/workimg.avif';

const About = () => {
  return (
    <section id="About" className="w-full bg-[#faf8f5] py-24">
      {/* Section header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#0f172a] tracking-tight">About Me</h1>
        <div className="mt-3 mx-auto w-16 h-1 bg-[#D46712] rounded-full" />
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text side */}
        <div className="flex-1">
          <span className="text-[#D46712] text-xs font-semibold tracking-[0.25em] uppercase">
            Who am I?
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0f172a] leading-snug">
            A developer who turns<br /> ideas into reality.
          </h2>

          <p className="mt-6 text-[#475569] text-base leading-8">
            I'm a full-stack developer based in Chandigarh, turning coffee into code and
            pixels into perfection. With a passion for creating sleek, user-friendly
            designs, I love bringing ideas to life on the web.
          </p>
          <p className="mt-3 text-[#475569] text-base leading-8">
            Fun fact: I can type at over 120 words per minute — perfect for when
            inspiration strikes! When I'm not coding, you'll find me playing badminton
            or exploring the latest tech trends.
          </p>

          {/* Stat chips */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: 'Projects Built', value: '10+' },
              { label: 'WPM Typing Speed', value: '120+' },
              { label: 'Stacks Mastered', value: 'Full' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-[#0f172a]/6 text-center">
                <div className="text-2xl font-bold text-[#D46712]">{value}</div>
                <div className="text-xs text-[#64748b] mt-1">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="#Learning"
            className="inline-block mt-8 px-7 py-3 rounded-full border-2 border-[#0f172a] text-[#0f172a] font-semibold text-sm hover:bg-[#0f172a] hover:text-white transition-all duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* Image side */}
        <div className="hidden lg:block flex-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#D46712]/10 rounded-3xl" />
            <img
              src={workimg}
              alt="Sanket working"
              className="relative rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;