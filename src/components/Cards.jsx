import React from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
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
import BookingsData from "./BookingsData";

function Cards() {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="flex flex-col">
      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-2xl">
          Explore Our <span className="text-[#00a5cf]">Exclusive</span> Rooms
        </h1>
        <p className="mt-2 text-gray-600">
          Discover A Range Of Luxurious Accommodations Designed To Offer You
          Comfort And Style. Choose From Our <br /> Curated Selection Of Rooms
          And Suites To Find The Perfect Stay For Your Needs.
        </p>
      </div>

      {/* Mykonos Town */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          Mykonos Town
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[oceanview_bedroom, accessible_room, gardenview_room].map(
            (image, index) => (
              <div
                className="relative h-80 mx-auto"
                style={{ width: "65%" }}
                key={index}
              >
                <img
                  src={image}
                  alt={`Mykonos Room ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                {/* Heart Icon - positioned absolutely */}
                <HeartIcon
                  className={`absolute top-4 right-4 text-white cursor-pointer ${
                    liked ? "fill-current text-red-500" : "text-gray-500"
                  }`}
                  fill={liked ? "currentColor" : "none"}
                  onClick={() => setLiked(!liked)}
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <BookingsData/>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Elia Beach */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          Elia Beach
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[elia, elia_2, elia_3].map((image, index) => (
            <div
              className="relative h-80 mx-auto"
              style={{ width: "65%" }}
              key={index}
            >
              <img
                src={image}
                alt={`Elia Beach Room ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <HeartIcon
                className={`absolute top-4 right-4 text-white cursor-pointer ${
                  liked ? "fill-current text-red-500" : "text-gray-500"
                }`}
                fill={liked ? "currentColor" : "none"}
                onClick={() => setLiked(!liked)}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <BookingsData/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paleokastritsa */}
      <div className="text-center mt-20 mb-20">
        <h1 className="font-semibold text-xl mb-4 text-start ml-32">
          Paleokastritsa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[serenity_room, serenity_room2, serenity_room3].map(
            (image, index) => (
              <div
                className="relative h-80 mx-auto"
                style={{ width: "65%" }}
                key={index}
              >
                <img
                  src={image}
                  alt={`Paleokastritsa Room ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <HeartIcon
                  className={`absolute top-4 right-4 text-white cursor-pointer ${
                    liked ? "fill-current text-red-500" : "text-gray-500"
                  }`}
                  fill={liked ? "currentColor" : "none"}
                  onClick={() => setLiked(!liked)}
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <BookingsData/>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
