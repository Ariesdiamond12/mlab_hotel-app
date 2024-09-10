import React from "react";
import santorini from "../assets/santorini.jpg";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <div
        className="relative h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${santorini})` }}
      ></div>
      {/* <img className="w-full h-full object-cover" src={santorini} alt="" /> */}
    </div>
  );
}

export default Hero;
