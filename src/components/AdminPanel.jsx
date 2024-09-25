import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Input,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { db } from "../config/Firebase";
import { collection, addDoc } from "firebase/firestore";

function AdminPanel() {
  const [place, setPlace] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);
  const [message, setMessage] = useState("");
  const [accommodations, setAccommodations] = useState([]);

  const availabilityOptions = [
    { key: "true", label: "Available" },
    { key: "false", label: "Not Available" },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row h-screen w-full justify-center items-start px-6 py-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center w-full sm:w-2/5 p-4 border-r border-gray-300">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <Input
                type="text"
                label="Place:"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                label="Room Type:"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Input
                type="number"
                label="Capacity:"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="number"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Select
                label="Availability:"
                className="max-w-xs"
                value={availability ? "true" : "false"}
                onChange={(e) => setAvailability(e.target.value === "true")}
              >
                {availabilityOptions.map((option) => (
                  <SelectItem key={option.key}>{option.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="mb-4">
              <button
                className="w-full my-5 py-2 rounded-xl bg-[#10659d] text-white"
                type="submit"
              >
                {isEditing ? "Update Accommodation" : "Add Accommodation"}
              </button>
            </div>
          </form>
          {message && (
            <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
          )}
        </div>

        {/* Right Column */}
        <div className="flex-1 mx-3 my-2 rounded-xl overflow-auto w-full sm:w-3/5 p-4">
          <Table>
            <TableHeader>
              <TableColumn>Room Type</TableColumn>
              <TableColumn>Capacity</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Availability</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {accommodations.map((accommodation) => (
                <TableRow key={accommodation.id}>
                  <TableCell>{accommodation.roomType}</TableCell>
                  <TableCell>{accommodation.capacity}</TableCell>
                  <TableCell>R{accommodation.price}</TableCell>
                  <TableCell>
                    {accommodation.availability ? "Available" : "Not Available"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
