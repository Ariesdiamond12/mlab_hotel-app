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
    <div className="bg-[#d9f0ff] min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-full min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start p-8 text-white">
          <h1 className="text-black text-5xl text-left font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-[#66666e] text-lg text-left max-w-md">
            Email, call or complete the form so that we can get in touch with
            you.
          </p>
          <p className="text-[#66666e] mt-4">
            support@luviana.com <br /> +1 (555) 555-555 <br />
            Santorini
          </p>

          {/* Horizontal Container for Sections */}
          <div className="flex flex-row space-x-8 mt-6">
            {/* Customer Support Section */}
            <div className="w-1/2">
              <h1 className="text-black text-sm font-semibold">
                Customer Support
              </h1>
              <p className="text-[#66666e] text-sm leading-relaxed">
                Our Support team is available <br /> the clock to address any
                concerns
                <br />
                or queries you have
              </p>
            </div>

            {/* Feedback and Suggestions Section */}
            <div className="w-1/2">
              <h1 className="text-black text-sm font-semibold">
                Feedback & Suggestions
              </h1>
              <p className="text-[#66666e] text-sm leading-relaxed">
                We value your feedback and we are <br /> continuously working to
                improve our services. Your input is crucial in helping us provide the <br />
                best experience possible.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-center bg-white w-11/12 max-w-md p-7 rounded-xl shadow-lg relative left-6 ml-28">
          <form className="w-full max-w-[350px] p-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-left text-gray-800">
              Get In Touch
            </h1>
            <p className="text-[#66666e] text-left mb-4">
              You can reach us anytime
            </p>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0368a6]"
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0368a6]"
                type="text"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0368a6]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <textarea
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0368a6] h-40"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#0368a6] text-white font-semibold rounded-full transition duration-300"
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
