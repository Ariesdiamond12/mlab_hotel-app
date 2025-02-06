import React, { useState } from 'react';
import { Calendar, ChevronDown, Users } from 'lucide-react';
import Ocean from "../assets/oceanview.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import images from "../constants/images";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  const rooms = [
    {
      id: 1,
      name: 'Classic Room',
      image: images.Suite1,
      standardRate: 39,
      breakfastRate: 49,
      rating: 4.5,
      reviews: 128,
      available: true
    },
    {
      id: 2,
      name: 'Standard Room',
      image: images.Paleokrastritsa1, 
      standardRate: 42,
      breakfastRate: 54,
      rating: 4.8,
      reviews: 156,
      available: true
    },
    {
      id: 3,
      name: 'Family Room',
      image: images.Suite3, 
      standardRate: 52,
      breakfastRate: 69,
      rating: 4.7,
      reviews: 98,
      available: false
    },
    {
      id: 4,
      name: 'Grand Deluxe Room',
      image: images.Suite4, 
      standardRate: 60,
      breakfastRate: 80,
      rating: 4.9,
      reviews: 203,
      available: false
    }
  ];

  return (
    <div className="w-full h-full relative">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white overflow-hidden px-4 md:px-10">
        <div className="relative h-[75vh] w-full rounded-2xl mt-20">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url(${Ocean})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
          </div>

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

      {/* Room Booking Section */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h2 className="text-center text-2xl font-medium text-gray-800">Make your reservation</h2>
        
        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="text-sm text-gray-600">CHECK-IN</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl">26</span>
              <div className="text-gray-500">
                <div>June</div>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <div className="text-sm text-gray-600">CHECK-OUT</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl">29</span>
              <div className="text-gray-500">
                <div>June</div>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <div className="text-sm text-gray-600">GUESTS</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl">03</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <button className="bg-[#0368a6] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            CHECK AVAILABILITY
          </button>
        </div>

        {/* Room Listings */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">Rooms available for you</h3>
          
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-48 h-32 object-cover rounded"
              />
              
              <div className="flex-1 min-w-[200px]">
                <h4 className="font-medium text-lg">{room.name}</h4>
                <div className="flex items-center gap-1 text-yellow-400">
                  {'★'.repeat(Math.floor(room.rating))}
                  <span className="text-gray-600 text-sm">({room.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 min-w-[150px]">
                <div className="text-sm text-gray-600">
                  Starting from ${room.standardRate}/night
                </div>
                <div className="text-sm text-gray-600">
                  Includes breakfast ${room.breakfastRate}/night
                </div>
                <button 
                  className={`px-4 py-2 rounded ${
                    room.available 
                      ? 'bg-[#0368a6] text-white hover:bg-blue-600' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!room.available}
                >
                  {room.available ? 'SELECT ROOM' : 'SOLD OUT'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-800">Your booking overview</h3>
          {/* Add booking summary content here */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;