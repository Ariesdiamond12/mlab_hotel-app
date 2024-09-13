import React from "react";
import Resident from "../assets/resident.jpg";
import Villa from "../assets/villa.jpg";
import Luxury from "../assets/luxury-villa.jpg";

function Content() {
  return (
    <div className="flex flex-col mb-44">
      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-2xl">Explore Our Exclusive Villas</h1>
        <p className="mt-2 text-gray-600">
          Discover a whole new way of living your holidays in Greece, Santorini.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          {/* Resident Villa */}
          <div className="h-80 w-75 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Resident}
              alt="Resident Villa"
              className="w-full h-full object-cover"
            />
            <p className="text-black">MyKonos Town</p>
          </div>

          {/* Villa */}
          <div className="h-80 w-75 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Villa}
              alt="Villa"
              className="w-full h-full object-cover "
            />
            <p className="text-black">Elia Beach</p>
          </div>

          {/* Luxury Villa */}
          <div className="h-80 w-75 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Luxury}
              alt="Luxury Villa"
              className="w-full h-full object-cover"
            />
            <p className="text-black">Paleokastrita</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
