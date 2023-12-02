import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#091824]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alexander Fisher
        </h1>
        <h2 className="text-[#8892b0] py-4 max-w-[700px]">
          I am student at the University of Florida pursuing a career in
          Computer Science.{" "}
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] rounded-md hover:border-[#8892b0] duration-500">
            <Link to="about" smooth={true} duration={600}>
              See More
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <Link to="about" smooth={true} duration={600}>
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
