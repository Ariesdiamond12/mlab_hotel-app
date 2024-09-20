import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
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
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      {/* Navbar */}
      <div className="pl-16">
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Ocean Breeze
        </h1>
      </div>

      {/* Centering the Navbar links */}
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/hero")}>
              Home
            </a>
          </li>
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/rooms")}>
              Rooms
            </a>
          </li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="justify-end items-end">
        <Input startContent={
          <IoSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }/>
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
          <h1>Ocean Breeze</h1>
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/hero")}>
              Home
            </a>
          </li>
          <li>
            <a className="cursor-pointer" onClick={() => navigate("/rooms")}>
              Rooms
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
