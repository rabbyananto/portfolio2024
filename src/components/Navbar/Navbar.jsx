import React from "react";
import "./Navbar.css";
import {
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaRegPaperPlane,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillMoonStarsFill, BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../../assets/logo/logo-transparent-png.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 w-full h-[80px] flex justify-between items-center lg:px-24 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="home" activeClass="active" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                activeClass="active"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" smooth={true} duration={500}>
                Works
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="">
          <img style={{ width: "150px" }} src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className=" font-serif text-lg">
            <Link to="home" activeClass="active" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className=" font-serif text-lg">
            <Link to="about" activeClass="active" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className=" font-serif text-lg">
            <Link to="skills" activeClass="active" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className=" font-serif text-lg">
            <Link to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li className=" font-serif text-lg">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg hover:rounded-md">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mdabdullaalrabby/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:rounded-md">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://github.com/rabbyananto"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] hover:rounded-md">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://www.behance.net/mdabdullaalrabby"
            >
              Behance <FaBehance size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-br-lg hover:rounded-md">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1iKNmQ1c2H10llY0uaDVXQ9g1uZmBez9X/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
