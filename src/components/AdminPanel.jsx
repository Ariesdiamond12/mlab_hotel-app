import React, { useState, useEffect } from "react";
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
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import SideMenu from "./SideMenu";

function AdminPanel() {
  const [place, setPlace] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);
  const [message, setMessage] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track editing mode
  const [currentId, setCurrentId] = useState(null); // Track the current accommodation being edited

  const availabilityOptions = [
    { key: "true", label: "Available" },
    { key: "false", label: "Not Available" },
  ];

  // Fetch accommodations when the component mounts
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
    getAccommodations();
  }, []);

  // Add or update accommodation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "accommodations");

    try {
      if (isEditing) {
        // Update the accommodation if in edit mode
        const docRef = doc(db, "accommodations", currentId);
        await updateDoc(docRef, {
          place,
          roomType,
          capacity,
          price,
          availability,
        });
        setMessage("Accommodation updated successfully!");
      } else {
        // Add a new accommodation if not in edit mode
        await addDoc(collectionRef, {
          place,
          roomType,
          capacity,
          price,
          availability,
        });
        setMessage("Accommodation added successfully!");
      }

      // Clear the form fields after submitting
      setPlace("");
      setRoomType("");
      setCapacity("");
      setPrice("");
      setAvailability(true);
      setIsEditing(false);
      setCurrentId(null);

      // Refresh accommodations list after adding/updating
      const readCollection = await getDocs(collectionRef);
      const data = readCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccommodations(data);
    } catch (err) {
      console.error(
        isEditing
          ? "Error updating accommodation"
          : "Error adding accommodation",
        err
      );
      setMessage(
        isEditing
          ? "Failed to update accommodation."
          : "Failed to add accommodation."
      );
    }
  };

  // Delete an accommodation
  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "accommodations", id);
      await deleteDoc(docRef);
      setMessage("Accommodation deleted successfully!");

      // Refresh accommodations list after deleting
      const collectionRef = collection(db, "accommodations");
      const readCollection = await getDocs(collectionRef);
      const data = readCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAccommodations(data);
    } catch (err) {
      console.error("Error deleting accommodation:", err);
      setMessage("Failed to delete accommodation.");
    }
  };

  // Edit an existing accommodation
  const handleEdit = (accommodation) => {
    setPlace(accommodation.place);
    setRoomType(accommodation.roomType);
    setCapacity(accommodation.capacity);
    setPrice(accommodation.price);
    setAvailability(accommodation.availability);
    setIsEditing(true);
    setCurrentId(accommodation.id);
  };

  return (
    <div className="flex h-screen">
      {/* SideMenu - Fixed width */}
      <div className="w-1/4 min-w-[250px]">
        <SideMenu />
      </div>

      <div className="flex-1 p-6">
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
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="Room Type:"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
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
                  label="Price:"
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

          {/* Right Column - Table */}
          <div className="flex-1 mx-3 my-2 rounded-xl overflow-auto w-full sm:w-3/5 p-4">
            <Table>
              <TableHeader>
                <TableColumn>Place</TableColumn>
                <TableColumn>Room Type</TableColumn>
                <TableColumn>Capacity</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Availability</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {accommodations.map((accommodation) => (
                  <TableRow key={accommodation.id}>
                    <TableCell>{accommodation.place}</TableCell>
                    <TableCell>{accommodation.roomType}</TableCell>
                    <TableCell>{accommodation.capacity}</TableCell>
                    <TableCell>R{accommodation.price}</TableCell>
                    <TableCell>
                      {accommodation.availability
                        ? "Available"
                        : "Not Available"}
                    </TableCell>
                    <TableCell>
                      <button
                        className="text-blue-500"
                        onClick={() => handleEdit(accommodation)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 ml-4"
                        onClick={() => handleDelete(accommodation.id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
