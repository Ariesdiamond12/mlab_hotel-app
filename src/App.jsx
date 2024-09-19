import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Welcome from "./components/Welcome";
// import BookNow from "./components/BookNow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/rooms" element={<Rooms />} />
          {/* <Route path="/book" element={<BookNow />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
