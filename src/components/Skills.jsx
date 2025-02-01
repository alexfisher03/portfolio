import React from "react";
import Django from "../assets/django.png";
import JavaScript from "../assets/javascript.png";
import Python from "../assets/python.png";
import ReactIMG from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Cpp from "../assets/cpp.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#111111] text-gray-400">
      {/* Container */}
      <div className="max-w-[1000px] font-bold mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-blue-200">Skills</p>
          <p className="py-4">
            // These are some of the technologies I've worked with so far
          </p>
        </div>
      
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="ny-4">PYTHON</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/search?q=repo%3Aalexfisher03%2FProg1++language%3APython&type=code"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img className="w-20 mx-auto" src={Cpp} alt="Tailwind icon" />
            <p className="ny-4">C++</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/alexfisher03/COP3530_project3"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
          
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img
              className="w-20 py-2.5 mx-auto"
              src={Django}
              alt="Django icon"
            />
            <p className="ny-4">DJANGO</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/search?q=repo%3Aalexfisher03%2FBarbell++language%3APython&type=code"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="ny-4">JAVASCRIPT</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/search?q=repo%3Aalexfisher03%2FBarbell++language%3AJavaScript&type=code"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img className="w-20 mx-auto" src={ReactIMG} alt="React icon" />
            <p className="ny-4">REACT</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/alexfisher03/portfolio/tree/main/portfolio"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
          <div className="group skills-div bg-[#1b1b1b] shadow-md shadow-[#040c16] hover:scale-110 transform transition ease-in-out duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="ny-4">TAILWINDCSS</p>
            <div className="opacity-0 pt-1 text-center group-hover:opacity-100 duration-300">
              <a
                href="https://github.com/a1exanderklein/ACM-Website"
                target="_blank"
              >
                <button className="text-center rounded-sm px-1 py-1 m-1 bg-[#1d1d1d] text-gray-400 font-bold text-lg hover:scale-110 transform transition ease-in-out duration-300">
                  See Where
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
