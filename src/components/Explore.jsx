import React from "react";
import Resident from "../assets/resident.jpg";

function Explore() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-20">
      {/* Left Column - Image of Scooter */}
      <div className="flex justify-center items-center px-4">
        <img
          src={Resident}
          alt="Villa"
          className="rounded-xl object-cover shadow-xl"
          style={{
            width: "400px",
            height: "500px",
          }}
        />
      </div>

      {/* Right Column - Text for Scooter in Santorini */}
      <div className="flex flex-col items-start justify-center w-full sm:px-16 text-left">
        {/* Decorative Line */}
        <hr className="w-1/4 border-none h-[5px] bg-[#0368a6] mb-4" />
        <p className="font-medium text-lg text-gray-600 mb-2">
          Raising Comfort To the Highest Level
        </p>
        <h1 className="text-3xl font-bold text-[#0368a6] mb-4">
          Welcome To Luviana Hotel
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Luviana Hotel is the right choice for visitors who are searching for a
          luxurious and comfortable place to stay in Santorini. Our hotel is
          located in the heart of Santorini, Greece. You will get the best view
          of the caldera and the sea from our hotel.
        </p>
        <button className="w-fit px-4 py-2 rounded-xl bg-[#10659d] text-white font-medium hover:bg-[#074a77] transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Explore;
