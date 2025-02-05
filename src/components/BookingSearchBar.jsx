import React, { useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Search } from "lucide-react"; // Importing Search icon
import { guests, places } from "./data";

function BookingSearchBar() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Select
              label="Place"
              selectedKeys={[selectedPlace]}
              onSelectionChange={(keys) => setSelectedPlace(Array.from(keys)[0])}
              className="w-full h-12"
            >
              {places.map((place) => (
                <SelectItem key={place.key} value={place.label}>
                  {place.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check in
            </label>
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              variant="bordered"
              placeholder="Add dates"
              className="w-full h-12"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check out
            </label>
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              variant="bordered"
              placeholder="Add dates"
              className="w-full h-12"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guests
            </label>
            <Select
              label="Guests"
              selectedKeys={[selectedGuests]}
              onSelectionChange={(keys) => setSelectedGuests(Array.from(keys)[0])}
              className="w-full h-12"
            >
              {guests.map((guest) => (
                <SelectItem key={guest.key} value={guest.label}>
                  {guest.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          {/* Search Button with Icon */}
          <div className="flex items-end justify-center">
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition h-12 w-12 flex items-center justify-center">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSearchBar;
