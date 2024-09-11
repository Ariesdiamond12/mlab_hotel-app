import React from "react";
import santorini from "../assets/santorini.jpg";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      <div
        className="relative h-[90vh] w-full bg-cover bg-center"
        style={{
          background: `url(${santorini})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Add this line to ensure the image covers ,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-normal mb-4">
          The Easiest Way To <br /> Plan Your Dream Trip
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-[700px]">
          Book Your Travel And Transportation Service With Us And Enjoy A
          Hassle-Free And Memorable Journey.
        </p>
        <button className="rounded-full drop-shadow-lg bg-white text-black font-semibold py-2 px-6 mt-7 hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
