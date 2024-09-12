import React from "react";
import Sunset from "../assets/sunset.jpg";
import Scooter from "../assets/Scooter.jpg";

function Explore() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-10">
      {/* Left Column - Text for Santorini */}
      <div className="flex flex-col justify-center w-full px-8 sm:px-16">
        <h1 className="font-semibold text-2xl">Explore Santorini Greece</h1>
        <p className="mt-4 text-lg">
          Santorini is one of the most iconic and picturesque islands in Greece,
          renowned for its stunning sunsets, whitewashed buildings, and volcanic
          landscapes. It is part of the Cyclades group of islands in the Aegean
          Sea and has a rich history, unique culture, and breathtaking natural
          beauty.
        </p>
      </div>

      {/* Right Column - Image of Santorini Sunset */}
      <div className="flex justify-center items-center px-4">
        <img
          src={Sunset}
          alt="Sunset"
          className="rounded-xl object-cover shadow-xl"
          style={{
            width: "400px",
            height: "300px",
          }}
        />
      </div>

      {/* Left Column - Image of Scooter */}
      <div className="flex justify-center items-center px-4">
        <img
          src={Scooter}
          alt="Scooter"
          className="rounded-xl object-cover shadow-xl"
          style={{
            width: "400px",
            height: "300px",
          }}
        />
      </div>

      {/* Right Column - Text for Scooter in Santorini */}
      <div className="flex flex-col justify-center w-full px-8 sm:px-16">
        <h1 className="font-semibold text-2xl">
          Scootin' through Santorini Like A Local
        </h1>
        <p className="mt-4 text-lg">
          Riding a scooter in Santorini, Greece, is a fantastic way to explore
          the island's winding roads, picturesque villages, and stunning coastal
          views. As you ride through Santorini, you’ll pass by dramatic cliffs,
          vineyards, and traditional whitewashed buildings, all set against the
          backdrop of the deep blue Aegean Sea.
        </p>
      </div>
    </div>
  );
}

export default Explore;
