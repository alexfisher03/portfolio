import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#242424] text-gray-300 z-50 opacity-90">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "75px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:scale-110 duration-300">
          <Link to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-300">
          <Link to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 duration-300">
          <Link to="skills" smooth={true} duration={600}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 duration-300">
          <Link to="projects" smooth={true} duration={600}>
            Projects
          </Link>
        </li>
      </ul>

      {/* Hamburger
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile menu
      <ul
        style={{ backgroundColor: "#1b1b1b" }}
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen z-50 bg-opacity-100 flex flex-col justify-center items-center"
        }
      >
        <li className="hover:scale-110 duration-300 py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={600}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={600}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={600}
          >
            Projects
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={600}>
            Contact
          </Link>
        </li>
      </ul> */}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-20">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2c69f6]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/alexander-fisher-00209828a/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d2d2d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/alexfisher03"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
