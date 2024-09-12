import React from "react";
import Sunset from '../assets/sunset.jpg'
import Scooter from "../assets/Scooter.jpg";

function Explore() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden mt-10">
      {/* Left Column */}
      <div className="flex flex-col justify-center w-full pl-48">
        <h1 className="font-semibold">Explore Santorini Greece</h1>
        <p>
          Santorini is one of the most iconic and picturesque islands in Greece,
          renowned for its stunning sunsets, whitewashed buildings, and volcanic
          landscapes. It is part of the Cyclades group of islands in the Aegean
          Sea and has a rich history, unique culture, and breathtaking natural
          beauty.
        </p>
      </div>
      
      {/* Right Column */}
      <div className="hidden sm:flex justify-center items-center mx-3 my-2 rounded-xl size-65 overflow-hidden">
  <img
    src={Sunset}
    alt="Sunset"
    className="rounded-xl object-cover mx-auto shadow-xl"
    style={{
      maxWidth: '80%',
      maxHeight: '90%'
    }}
  />
</div>


      {/* Left Column */}
      <div
       className="hidden sm:flex justify-center items-center mx-3 my-2 rounded-xl size-65 overflow-hidden">
          <img 
          src={Scooter}
          alt="Scooter" 
          className="rounded-xl object-cover w-full h-full shadow-xl"
          style={{
            maxWidth: '60%',
            maxHeight: '80%',
          }} />
        </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center ml-9 pr-40">
        <h1 className="font-semibold">Scootin' through Santorini Like A Local</h1>
        <p className="text-">
        Riding a scooter in Santorini, Greece, is a fantastic way to explore the island's winding roads, picturesque villages, and stunning coastal views. As you ride through Santorini, you’ll pass by dramatic cliffs, vineyards, and traditional whitewashed buildings, all set against the backdrop of the deep blue Aegean Sea
        </p>
      </div>
    </div>
  );
}

export default Explore;
