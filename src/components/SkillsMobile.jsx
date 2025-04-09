import React from 'react';
import html from '../assets/html.svg';
import Css from '../assets/Css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import Tailwind from '../assets/Tailwind.svg';
import Node from '../assets/Node.svg';
import Mongodb from '../assets/Mongodb.svg';
import ejs from '../assets/ejs.svg';
import postgresql from '../assets/postgresql.svg';
import express from '../assets/express.svg';
import aws from '../assets/aws.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import vercel from '../assets/vercel.svg';
import postman from '../assets/postman.png';

const SkillsMobile = () => {
  return (
    <div className="w-full h-[80%] bg-[#FFF5EE] py-8">
      {/* Title */}
      <div className="text-3xl font-medium text-[#252934] text-center">
        <h1 className="mt-6">SKILLS</h1>
      </div>
      <div className="w-16 h-1 bg-[#252934] mt-3 mx-auto"></div>

      {/* Front-End Section */}
      <div className="mt-10 px-4">
        <ul className="flex flex-col items-center gap-6">
          <li className="text-2xl text-[#252934]">
            Front-End :
            <div className="w-12 h-0.5 bg-[#252934] mt-2 mx-auto"></div>
          </li>
          <div className="flex flex-wrap justify-center gap-6">
            <li><img src={html} alt="html-logo" className="h-12 w-12" /></li>
            <li><img src={Css} alt="css-logo" className="h-12 w-12" /></li>
            <li><img src={js} alt="js-logo" className="h-12 w-12" /></li>
            <li><img src={react} alt="react-logo" className="h-12 w-12" /></li>
            <li><img src={Tailwind} alt="tailwind-logo" className="h-12 w-12" /></li>
          </div>
        </ul>
      </div>

      {/* Back-End Section */}
      <div className="mt-10 px-4">
        <ul className="flex flex-col items-center gap-6">
          <li className="text-2xl text-[#252934]">
            Back-End :
            <div className="w-12 h-0.5 bg-[#252934] mt-2 mx-auto"></div>
          </li>
          <div className="flex flex-wrap justify-center gap-6">
            <li><img src={Node} alt="node-logo" className="h-12 w-12" /></li>
            <li><img src={express} alt="express-logo" className="h-12 w-12" /></li>
            <li><img src={postgresql} alt="postgresql-logo" className="h-12 w-12" /></li>
            <li><img src={Mongodb} alt="mongodb-logo" className="h-12 w-12" /></li>
            <li><img src={ejs} alt="ejs-logo" className="h-12 w-12" /></li>
          </div>
        </ul>
      </div>

      {/* DevOps Section */}
      <div className="mt-10 px-4">
        <ul className="flex flex-col items-center gap-6">
          <li className="text-2xl text-[#252934]">
            DevOps :
            <div className="w-12 h-0.5 bg-[#252934] mt-2 mx-auto"></div>
          </li>
          <div className="flex flex-wrap justify-center gap-6">
            <li><img src={aws} alt="aws-logo" className="h-12 w-12" /></li>
            <li><img src={git} alt="git-logo" className="h-12 w-12" /></li>
            <li><img src={github} alt="github-logo" className="h-12 w-12" /></li>
            <li><img src={vercel} alt="vercel-logo" className="h-12 w-12" /></li>
            <li><img src={postman} alt="postman-logo" className="h-12 w-12" /></li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SkillsMobile;