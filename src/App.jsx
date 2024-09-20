import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Welcome from "./components/Welcome";
import BookingsData from "./components/BookingsData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/hero" element={<Hero />} /> */}
          <Route path="/data" element={<BookingsData/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
