import React, { useEffect, useState } from "react";
import Navbar from "./Navigation";
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
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore"; // Add updateDoc and doc import

function AdminPanel() {
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);
  const [message, setMessage] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [currentId, setCurrentId] = useState(null); // Store the ID of the accommodation being edited

  const availabilityOptions = [
    { key: "true", label: "Available" },
    { key: "false", label: "Not Available" },
  ];

  useEffect(() => {
    const getAccommodations = async () => {
      try {
        const collectionRef = collection(db, "accommodations");
        const readCollection = await getDocs(collectionRef);

        const data = readCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAccommodations(data);
      } catch (err) {
        console.error("Error fetching accommodations:", err);
      }
    };

    getAccommodations(); // Call the function inside useEffect
  }, []); // The dependency array should be outside

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (isEditing) {
      await updateAccommodation(); // Update if in editing mode
    } else {
      await addAccommodation(); // Add if not in editing mode
    }
  };

  const addAccommodation = async () => {
    try {
      const collectionRef = collection(db, "accommodations");
      await addDoc(collectionRef, {
        roomType,
        capacity,
        price,
        availability,
      });

      setMessage("Accommodation added successfully!");

      // Clear the form fields
      setRoomType("");
      setCapacity("");
      setPrice("");
      setAvailability(true);

      // Refresh accommodations list
      const readCollection = await getDocs(collectionRef);
      const data = readCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccommodations(data);
    } catch (err) {
      console.error("Error adding accommodation:", err);
      setMessage("Failed to add accommodation.");
    }
  };

  const updateAccommodation = async () => {
    try {
      const docRef = doc(db, "accommodations", currentId);
      await updateDoc(docRef, {
        roomType,
        capacity,
        price,
        availability,
      });

      setMessage("Accommodation updated successfully!");

      // Clear the form fields and reset edit mode
      setRoomType("");
      setCapacity("");
      setPrice("");
      setAvailability(true);
      setIsEditing(false);
      setCurrentId(null);

      // Refresh accommodations list
      const collectionRef = collection(db, "accommodations");
      const readCollection = await getDocs(collectionRef);
      const data = readCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccommodations(data);
    } catch (err) {
      console.error("Error updating accommodation:", err);
      setMessage("Failed to update accommodation.");
    }
  };

  const handleEdit = (accommodation) => {
    setRoomType(accommodation.roomType);
    setCapacity(accommodation.capacity);
    setPrice(accommodation.price);
    setAvailability(accommodation.availability);
    setIsEditing(true);
    setCurrentId(accommodation.id);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row h-screen w-full justify-center items-start px-6 py-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center w-full sm:w-2/5 p-4 border-r border-gray-300">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <Input type="text" label="Add New Accommodation" />
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
                  <TableCell>
                    <button
                      className="text-blue-500"
                      onClick={() => handleEdit(accommodation)}
                    >
                      Edit
                    </button>
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
