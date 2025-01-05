import React from "react";
import Pool from "../assets/solace.jpeg";
import Offers from "../assets/sushi.jpeg";
import Outdoor from '../assets/pool.jpeg';
import Navbar from "../components/Navbar";
import Collage from "../components/Collage";
import { FaSpa, FaRegSmile, FaClock, FaMountain, FaUserFriends } from "react-icons/fa";
import Footer from "../components/Footer";

function Spa() {
  return (
    <div className="w-full h-full relative">
      <Navbar />
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
            src={Outdoor}
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
            Luviana Hotel is the right choice for visitors who are searching for
            a luxurious and comfortable place to stay in Santorini. Our hotel is
            located in the heart of Santorini, Greece. You will get the best
            view of the caldera and the sea from our hotel.
          </p>
          <button className="w-fit px-4 py-2 rounded-xl bg-[#10659d] text-white font-medium hover:bg-[#074a77] transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
      <Collage />

      <div className="mt-20 px-8 sm:px-16 mb-32">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#0368a6]">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Massage & Body Treatments", icon: <FaSpa /> },
            { name: "Facials", icon: <FaRegSmile /> },
            { name: "Full day Packages", icon: <FaClock /> },
            { name: "Half day Packages", icon: <FaClock /> },
            { name: "Himalayan Stone Back", icon: <FaMountain /> },
            {name: "Couples Packages", icon: <FaUserFriends />}
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-4xl text-[#0368a6] mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-[#0368a6] mb-4 text-center">
                {service.name}
              </h2>
              <p className="text-gray-700 text-center">
                Experience ultimate relaxation with our specialized {service.name.toLowerCase()} services designed for your comfort.
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Spa;
