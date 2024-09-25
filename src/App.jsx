import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Welcome from "./components/Welcome";
import AdminPanel from "./components/AdminPanel";
import Registration from "./components/Registration";
// import BookingsData from "./components/BookingsData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*
          
           */}
          {/* <Route path="/data" element={<BookingsData />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
