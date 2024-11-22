import React from "react";
import offers from "../assets/amenities.jpg";
import {
  FaSwimmer,
  FaSpa,
  FaUtensils,
  FaCocktail,
  FaWifi,
  FaUmbrellaBeach,
} from "react-icons/fa";

function Amenities() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-20">
      <div className="flex flex-col justify-center w-full px-8 sm:px-16">
        <h1 className="font-semibold text-2xl">Our Amenities</h1>
        <p className="mt-4 text-lg text-gray-700">
          Our hotel offers a range of amenities to make your stay comfortable
          and enjoyable. The hotel is arranged on three floors without a lift.
          On the ground floor, apart from the reception there is a comfortable
          lounge where you can sit and drink coffee.
        </p>
        <ul className="flex flex-wrap justify-start gap-8 mt-6">
          <li className="flex items-center text-lg">
            <FaSwimmer className="text-[#0368a6] mr-3" size={35} /> Infinity
            Pool
          </li>
          <li className="flex items-center text-lg">
            <FaSpa className="text-[#0368a6] mr-3" size={35} /> Spa & Wellness
            Center
          </li>
          <li className="flex items-center text-lg">
            <FaUtensils className="text-[#0368a6] mr-3" size={35} /> Fine Dining
          </li>
          <li className="flex items-center text-lg">
            <FaCocktail className="text-[#0368a6] mr-3" size={35} /> Rooftop Bar
          </li>
          <li className="flex items-center text-lg">
            <FaWifi className="text-[#0368a6] mr-3" size={35} /> High-Speed WiFi
          </li>
          <li className="flex items-center text-lg">
            <FaUmbrellaBeach className="text-[#0368a6] mr-3" size={35} />
            Private Beach
          </li>
        </ul>
      </div>

      {/* Right Column - Image of Santorini Sunset */}
      <div className="flex justify-center items-center px-4">
        <img
          src={offers}
          alt="Amenities"
          className="rounded-xl object-cover shadow-xl"
          style={{
            width: "600px",
            height: "500px",
          }}
        />
      </div>
    </div>
  );
}

export default Amenities;
