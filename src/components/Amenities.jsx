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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto w-full gap-8 mt-20">
      <div className="flex flex-col justify-start w-full px-8 lg:px-16">
        <h1 className="font-semibold text-2xl">Our Amenities</h1>
        <p className="mt-4 text-lg text-gray-700">
          Our hotel offers a range of amenities to make your stay comfortable
          and enjoyable. The hotel is arranged on three floors without a lift.
          On the ground floor, apart from the reception there is a comfortable
          lounge where you can sit and drink coffee.
        </p>
        
        {/* Grid for amenities icons */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
          <div className="flex items-center text-lg">
            <FaSwimmer className="text-[#0368a6] mr-3" size={24} />
            Infinity Pool
          </div>
          <div className="flex items-center text-lg">
            <FaSpa className="text-[#0368a6] mr-3" size={24} />
            Spa & Wellness Center
          </div>
          <div className="flex items-center text-lg">
            <FaUtensils className="text-[#0368a6] mr-3" size={24} />
            Fine Dining
          </div>
          <div className="flex items-center text-lg">
            <FaCocktail className="text-[#0368a6] mr-3" size={24} />
            Rooftop Bar
          </div>
          <div className="flex items-center text-lg">
            <FaWifi className="text-[#0368a6] mr-3" size={24} />
            High-Speed WiFi
          </div>
          <div className="flex items-center text-lg">
            <FaUmbrellaBeach className="text-[#0368a6] mr-3" size={24} />
            Private Beach
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex justify-center items-start px-4">
        <img
          src={offers}
          alt="Amenities"
          className="rounded-xl object-cover shadow-xl w-full max-w-[600px] h-[400px]"
        />
      </div>
    </div>
  );
}

export default Amenities;