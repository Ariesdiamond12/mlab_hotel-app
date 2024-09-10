import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/> */}
        <Route path="/'Hero" element={<Hero/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Login />
      <Registration /> */}
    </div>
  );
}

export default App;
