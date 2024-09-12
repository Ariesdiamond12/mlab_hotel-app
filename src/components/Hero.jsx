import React from "react";
import santorini from "../assets/santorini.jpg";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Content from "./Content";
import Map from "./Map";

function Hero() {
  return (
    <div className="w-full h-screen relative rounded-xl">
      <Navbar />

      {/* Background Image and Overlay Container */}
      <div className="relative h-[90vh] w-full">
        {/* Background Image */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            background: `url(${santorini})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute top-0 w-full h-full bg-gray-900/30"></div>

        {/* Hero Content */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-normal mb-4">
            The Easiest Way To <br /> Plan Your Dream Trip
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-[700px]">
            Book Your Travel And Transportation Service With Us And Enjoy A
            Hassle-Free And Memorable Journey.
          </p>
          <button className="rounded-full shadow-lg bg-white text-black font-semibold py-2 px-6 mt-7 hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>
      </div>

      <Explore />
      <Content />
      <Map />
    </div>
  );
}

export default Hero;
