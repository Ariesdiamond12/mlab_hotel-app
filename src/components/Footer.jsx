import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="w-full">
      <div className="w-full bg-[#0368a6] text-white py-8">
        {/* Main Footer Container */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand Column */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="text-white font-bold text-xl">Caldera Suites</div>
              </div>
              <p className="text-medium">
                Imerovigli<br />
                Postal Code(ZIP): 847 000<br />
                Santorini
              </p>
              <p className="text-sm">Phone: +1 (555) 555-5555</p>
              <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-md transition duration-300">
                Book now
              </button>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">QUICK LINKS</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Living Rooms</a></li>
                <li><a href="#" className="hover:text-gray-300">Packages and Discount</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Our Services Column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">OUR SERVICES</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">About us</a></li>
                <li><a href="#" className="hover:text-gray-300">Booking System</a></li>
                <li><a href="#" className="hover:text-gray-300">Hotel Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">CONTACT US</h3>
              <p className="text-medium">support@calderasuites.com</p>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-6 border-gray-400" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm">© {year} Caldera Suites. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;