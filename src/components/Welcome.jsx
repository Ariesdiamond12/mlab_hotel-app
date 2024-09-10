import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Seaview from '../assets/seasideview.jpg'

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img className="absollute w-full h-full object-cover " src={Seaview} alt="illustration" />
      {/* <h1>Experience the best of both worlds, Escape to the seaside in our Coastal Retreat. Unwind with stunning ocean views and the soothing sound of the waves.</h1> */}
    </div>
  );
}

export default Welcome;
