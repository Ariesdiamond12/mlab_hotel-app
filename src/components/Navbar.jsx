import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Ocean Breeze
        </h1>
      </div>

      {/* Centering the Navbar links */}
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex space-x-8 items-center">
          <li>Home</li>
          <li>Rooms</li>
          <li>About Us</li>
        </ul>
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
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Ocean Breeze</h1>
          <li>Rooms</li>
          <li>About Us</li>
          <li>Home</li>
          <div className="flex flex-col">
            <button className="my-6">Account</button>
            <button>Inquire</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
