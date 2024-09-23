import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navigation";

function BookingsData() {
  const [bookings, setBookings] = useState([]);
  const fetchBookings = async () => {
    try {
      const collectionRef = collection(db, "bookings");
      const readCollection = await getDocs(collectionRef);

      const data = readCollection.docs.map((doc) => doc.data());
      // console.log(data)
      setBookings(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  {
    console.log(bookings);
  }
  return (
    <div>
      <Navbar />
      <h1>Bookings Data</h1>
      <ul>
        {bookings.map((booking, index) => (
          <li>place: {booking.place}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingsData;
