import React from "react";
import Ocean from "../assets/oceanview.jpg";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Rooms() {
  return (
    <div className="w-full h-full relative">
      <Navbar />

      {/* White background wrapping the hero section */}
      <div className="bg-white overflow-hidden px-4 md:px-10">
        <div className="relative h-[75vh] w-full rounded-2xl mt-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(${Ocean})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
          </div>

          {/* Text Overlay - Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Find Your Perfect Stay
            </h1>
            <p className="mt-2 text-lg">
              Discover luxury and comfort at unbeatable prices.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container mx-auto py-10 px-6 md:px-12">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Book Your Stay
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Check-in Date</label>
              <input
                type="date"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Check-out Date</label>
              <input
                type="date"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Guests</label>
              <input
                type="number"
                min="1"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>

      <Cards />
      <Footer />
    </div>
  );
}

export default Rooms;
