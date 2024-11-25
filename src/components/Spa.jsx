import Navigation from "./Navbar";
import React from "react";
import Pool from "../assets/solace.jpeg";
import Offers from '../assets/sushi.jpeg'
import Dusk from '../assets/dusk.jpeg'
import Collage from "./Collage";

function Spa() {
  return (
    <div className="w-full h-full relative">
      <Navigation />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full">
        <div>
          <img
            src={Pool}
            alt="Villa"
            className="object-cover shadow-xl bg-gray-900/30"
            style={{
              width: "100%",
              height: "500px",
            }}
          />
        </div>

        {/* Right Column - Text for Scooter in Santorini */}
        <div className="flex flex-col items-start justify-center w-full sm:px-16 text-left bg-[#0368a6]">
          <p className="font-medium text-lg text-white mb-2">
            Inspired By the vast Beauty of the Mediterranean Sea
          </p>
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome To Luviana Hotel
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            Enjoy a Luxury Stay at Luviana Hotel, where you can indulge in the
            finest amenities and services.
          </p>
        </div>
      </div>

      {/* Seafood */}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-20">
        <div className="flex flex-col justify-center w-full px-8 sm:px-16">
          <h1 className="font-semibold text-2xl">The Siesta Club</h1>
          <p className="mt-4 text-lg text-gray-700">
            The Siesta Club is your ultimate escape, a haven for those who
            cherish the art of relaxation and the joy of shared moments. Nestled
            in a tranquil and picturesque setting, we offer a unique blend of
            comfort, luxury, and community. At The Siesta Club, we celebrate the
            beauty of slowing down. Whether you’re lounging by the poolside,
            enjoying a gourmet meal at our bistro, or immersing yourself in one
            of our curated wellness experiences, every moment is designed to
            help you unwind and rejuvenate. Our spaces are thoughtfully crafted
            to foster connections, from cozy corners for intimate conversations
            to vibrant areas for lively gatherings. Whether you're here for a
            retreat, a celebration, or simply to recharge, you'll find yourself
            surrounded by an atmosphere of warmth and serenity. Join us, and
            discover the perfect balance of leisure and luxury. At The Siesta
            Club, life is not just about the destination—it’s about embracing
            the journey, one siesta at a time.
          </p>
        </div>

        {/* Right Column - Image of Santorini Sunset */}
        <div className="flex justify-center items-center px-4">
          <img
            src={Offers}
            alt="Amenities"
            className="rounded-xl object-cover shadow-xl"
            style={{
              width: "400px",
              height: "500px",
            }}
          />
        </div>
      </div>

      {/* Seafood */}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-8 mt-20">
      {/* Left Column - Image of Scooter */}
      <div className="flex justify-center items-center px-4">
        <img
          src={Dusk}
          alt="Dinner"
          className="rounded-xl object-cover shadow-xl"
          style={{
            width: "400px",
            height: "500px",
          }}
        />
      </div>

      {/* Right Column - Text for Scooter in Santorini */}
      <div className="flex flex-col items-start justify-center w-full sm:px-16 text-left">
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

    <Collage/>
    </div>
  );
}

export default Spa;
