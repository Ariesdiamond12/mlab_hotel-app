import React from "react";
// Mykonos Town images
import oceanview_bedroom from "../assets/mykonos-1.jpg";
import accessible_room from "../assets/mykonos-2.jpg";
import gardenview_room from "../assets/mykonos-3.jpg";
// Elia Beach images
import elia from "../assets/elia-1.jpg";
import elia_2 from "../assets/elia-2.jpg";
import elia_3 from "../assets/elia-3.jpg";
// Paleokrastritsa images
import serenity_room from "../assets/paleokrastritsa-1.jpg";
import serenity_room2 from "../assets/paleokrastritsa-2.jpg";
import serenity_room3 from "../assets/paleokrastritsa-3.jpg";

function Cards() {
  return (
    <div className="flex flex-col">
      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-2xl">
          Explore Our <span className="text-[#00a5cf]">Exclusive</span> Rooms
        </h1>
        <p className="mt-2 text-gray-600">
          Discover A Range Of Luxurious Accomodations Designed To Offer You
          Comfort And Style. Choose From Our <br /> Curated Selection Of Rooms
          And Suites To Find The Perfect Stay For Your Needs.
        </p>
      </div>

      {/* MyKonos Town */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          MyKonos Town
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={oceanview_bedroom}
              alt="Oceanview Bedroom"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={accessible_room}
              alt="Accessible Room"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={gardenview_room}
              alt="Gardenview Room"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Elia Beach */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          Elia Beach
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={elia}
              alt="Elia Beach Room 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={elia_2}
              alt="Elia Beach Room 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={elia_3}
              alt="Elia Beach Room 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Paleokrastritsa */}
      <div className="text-center mt-20 mb-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          Paleokrastritsa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={serenity_room}
              alt="Serenity Room"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={serenity_room2}
              alt="Serenity Room 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="h-80 mx-auto" style={{ width: "65%" }}>
            <img
              src={serenity_room3}
              alt="Serenity Room 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
