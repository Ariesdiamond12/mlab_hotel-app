import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/content" element={<Content/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
