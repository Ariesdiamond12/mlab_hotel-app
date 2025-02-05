import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black">
      {/* Navbar */}
      <div className="pl-16">
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Caldera Suites
        </h1>
      </div>

      {/* Centering the Navbar links */}
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a
              className="cursor-pointer px-4 py-2 h-5 text-black relative group"
              smooth={true}
              onClick={() => navigate("/home")}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0368a6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer px-4 py-2 h-5 text-black relative group"
              smooth={true}
              onClick={() => navigate("/rooms")}
            >
              Rooms
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0368a6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer px-4 py-2 h-5 text-black relative group"
              smooth={true}
              onClick={() => navigate("/spa")}
            >
              Spa & Restaurant
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0368a6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer px-4 py-2 h-5 text-black relative group"
              smooth={true}
              onClick={() => navigate("/contact")}
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0368a6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex space-x-4 items-center">
        <LuSearch className="w-7 h-6 cursor-pointer hover:text-[#0368a6] transition-all duration-300" />
        <FiUser
          className="w-7 h-6 cursor-pointer hover:text-[#0368a6] transition-all duration-300"
          onClick={() => navigate("/registration")}
        />
        <IoHeartOutline className="w-7 h-6 cursor-pointer hover:text-[#0368a6] transition-all duration-300" />
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <IoClose className="text-black" size={20} />
        ) : (
          <IoMenu size={20} />
        )}
      </div>

      {/* Drop-down Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Caldera Suites</h1>
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/home")}>
              Home
            </a>
          </li>
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/rooms")}>
              Dining
            </a>
          </li>
          <li>About Us</li>
          <div className="flex flex-col">
            <button className="global-btn my-6">Account</button>
            <button className="global-btn">Inquire</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
