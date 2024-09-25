import React from "react";
import { useNavigate } from "react-router-dom";
import Poolside from "../assets/poolside.jpeg";
import Navbar from "./Navbar";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <img
        className="absolute w-full h-full object-cover"
        src={Poolside}
        alt="illustration"
      />
      <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center p-4">
        <h1 className="font-medium text-white mb-8">
          Experience the best of both worlds, Escape to the seaside in our
          <br />
          Coastal Retreat. Unwind with stunning ocean views and the soothing
          <br />
          sound of the waves.
        </h1>
        <button
          className="border py-2 px-3 w-32 rounded-full text-black font-semibold bg-white"
          onClick={() => navigate("/registration")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
