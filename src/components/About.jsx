import React from "react";
import Gator from "../assets/gator2.png";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#111111] text-gray-400">
      <div className="flex flex-col justify-center items-center w-full h-full translate-y-20">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#8892b0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi, I'm Alexander - Welcome to my portfolio</p>
          </div>
          <div>
            <p>
              I'm a software engineer and computer science student at the University of Florida. I specialize in full-stack web development and have experience with a variety of technologies. I'm passionate about creating software that is both functional and user-friendly. I'm always looking for new opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="sm:text-right sm:pl-4 pt-3">
            <p className="text-4xl font-bold inline sm:inline border-b-4 border-[#8892b0]">
              My Education
            </p>
          </div>
          <div className="sm:text-left pt-4">
            <p className="text-[#003087] text-4xl text-bold">
              University of Florida
            </p>
            <p className="py-1 text-xl">
              B.S. in Computer Science
            </p>
            <p className="py-1 text-xl">Graduation - Spring 2026</p>
          </div>
        </div>
        <div className="opacity-0 pt-12 sm:opacity-100 flex justify-end ">
            <img className="w-1/2 hover:scale-105 duration-300" src={Gator} href="https://www.ufl.edu/" target="_blank"/>
          </div>
      </div>
    </div>
  );
};

export default About;