import React from "react";
import Scooter from "../assets/Scooter.jpg";

function Explore() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
      {/* Left Column */}
      <div
        className="hidden sm:block mx-3 my-2 rounded-xl size-65"
        style={{
          backgroundImage: `url(${Scooter})`, // Use the imported image directly
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Column */}
      <div className="flex flex-col justify-center ml-9">
        <h1>Explore Santorini Greec</h1>
        <p>
          Santorini is one of the most iconic and picturesque islands in Greece,
          renowned for its stunning sunsets, whitewashed buildings, and volcanic
          landscapes. It is part of the Cyclades group of islands in the Aegean
          Sea and has a rich history, unique culture, and breathtaking natural
          beauty.
        </p>
      </div>
    </div>
  );
}

export default Explore;
