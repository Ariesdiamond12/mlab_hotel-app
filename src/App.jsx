import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Rooms from "./pages/Rooms";
import Spa from "./pages/Spa";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/spa" element={<Spa/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
