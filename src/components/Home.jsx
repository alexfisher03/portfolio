import React, { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import SpaceBackground from "./SpaceBackground";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#111111] overflow-x-hidden">
      <SpaceBackground />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alexander Fisher
        </h1>
        <p className="text-[#ccd6f6] py-3">Digital Portfolio</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:scale-105 transform transition ease-in-out duration-300 hover:bg-[#8892b064] rounded-md hover:border-[#8892b0]">
            <Link to="about" smooth={true} duration={400}>
              See More
            </Link>
            <span className="group-hover:rotate-90 transform transition ease-in-out duration-300">
              <Link to="about" smooth={true} duration={400}>
                <HiArrowNarrowRight className="ml-3 " />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
