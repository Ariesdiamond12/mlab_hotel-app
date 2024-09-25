import React from "react";
import Ocean from "../assets/oceanview.jpg";
import Cards from "./Cards";
import Footer from "./Footer";
import Navigation from "./Navbar";

function Rooms() {
  return (
    <div className="w-full h-full relative">
      <Navigation />

      {/* Background Image Section */}
      <div
        className="relative h-[90vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Ocean})` }}
      >
        {/* Overlay */}
        <div className="absolute top-0 w-full h-full bg-gray-900/40"></div>

        {/* Text Overlay */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-medium mb-4">
            Escape To The Seaside In Our Coastal Retreat. Unwind <br /> With
            Stunning Ocean Views And The Soothing Sound Of <br /> The Waves.
          </h1>
        </div>
      </div>

      <Cards />
      <Footer />
    </div>
  );
}

export default Rooms;
