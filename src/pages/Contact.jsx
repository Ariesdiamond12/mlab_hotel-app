import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gradient-to-r from-[#106ee8] via-[#0fc1a1] to-[#90e0ab] min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-center max-w-md">
            Email, call or complete the form so that we can get in touch with
            you.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-6 mx-4 sm:mx-0">
          <form className="w-full max-w-[350px] p-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-center mb-4 text-gray-800">
              Get In Touch
            </h1>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0fc1a1]"
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0fc1a1]"
                type="text"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0fc1a1]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <textarea
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0fc1a1] h-40"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#0fc1a1] hover:bg-[#106ee8] text-white font-semibold rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
