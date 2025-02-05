import React from "react";
import santorini from "../assets/santorini.jpg";
import Explore from "../components/Explore";
import Content from "../components/Content";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Amenities from "../components/Amenities";
import Navbar from "../components/Navbar";
import BookingSearchBar from "../components/BookingSearchBar";

function Home() {
  return (
    <div className="w-full h-screen relative">
      <Navbar />

      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[100vh] w-full flex items-center justify-center">
          {/* Background Image Container */}
          <div
            className="absolute inset-0 bg-cover bg-center m-10 rounded-2xl mt-20"
            style={{
              backgroundImage: `url(${santorini})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
          </div>

          {/* Hero Content - Centered Text */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              The Easiest Way To <br /> Plan Your Dream Vacation
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-[700px]">
              Book Your Travel And Transportation Service With Us And Enjoy A
              Hassle-Free And Memorable Stay.
            </p>
          </div>

          {/* Lowered Booking Search Bar */}
          <div className="absolute bottom-12 w-full px-4">
            <BookingSearchBar />
          </div>
        </div>
      </div>

      <Content />
      <Explore />
      <Amenities />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
