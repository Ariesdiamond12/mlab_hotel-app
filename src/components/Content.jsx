import React from "react";
import Room1 from "../assets/suite1.jpg";
import Room2 from "../assets/paleokrastritsa-1.jpg";
import Room3 from "../assets/suite3.jpeg";

function Content() {
  return (
    <div className="flex flex-col mb-44">
      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-2xl">Explore Our Exclusive Rooms</h1>
        <p className="mt-2 text-gray-600">
          Discover a whole new way of living your holidays in Greece, Santorini.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          {/* Resident Villa */}
          <div className="h-80 w-80 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Room1}
              alt="suite"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Villa */}
          <div className="h-80 w-80 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Room2}
              alt="suite"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Luxury Villa */}
          <div className="h-80 w-80 overflow-hidden rounded-lg shadow-lg bg-overlay">
            <img
              src={Room3}
              alt="suite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
