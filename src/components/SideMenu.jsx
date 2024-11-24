import React from "react";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col items-start p-4 space-y-4">
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
      >
        Luviana
      </button>
      <button
        onClick={() => navigate("/settings")}
        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
      >
        Settings
      </button>
      <button
        onClick={() => navigate("/profile")}
        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
      >
        Profile
      </button>
      <button
        onClick={() => navigate("/reports")}
        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
      >
        Reports
      </button>
      <button
        onClick={() => navigate("/logout")}
        className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
      >
        Logout
      </button>
    </div>
  );
}

export default SideMenu;
