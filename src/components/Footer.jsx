import React from "react";
import Sea from "../assets/sea.jpg";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="w-full">
      {/* Footer Container */}
      <div
        className="w-full h-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Sea})`, height: "250px" }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          {/* Footer Content */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Luviana</h2>
            <div className="flex space-x-4 justify-center">
              {/* Social Media Icons */}
              <a href="#facebook" className="hover:text-blue-500">
                Facebook
              </a>
              <a href="#twitter" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="#instagram" className="hover:text-pink-400">
                Instagram
              </a>
            </div>
            <p className="text-sm">© {year} Luviana. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
