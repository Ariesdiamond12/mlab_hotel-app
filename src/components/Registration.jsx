import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Village from "../assets/Church.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import toast, { Toaster } from "react-hot-toast";

function Registration() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    // alert("Trying to register");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      toast.success("Successfully Created An Account!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <>
        <div
          className="h-screen w-full bg-cover bg-zinc-900/90 mix-blend-overlay bg-no-repeat relative bg-center object-fit-contain"
          style={{ backgroundImage: `url(${Village})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
          <div className="flex justify-center items-center h-full relative z-10">
            <form
              className="max-w-[400px] w-full rounded-md mx-auto bg-white p-8 mx-5"
              onSubmit={signIn}
            >
              <h2 className="text-4xl font-semibold text-center py-8">
                Get Started
              </h2>
              <div className="flex flex-col py-2">
                <label>Name</label>
                <input
                  className="border p-2 rounded-lg"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2">
                <label>Surname</label>
                <input
                  className="border p-2 rounded-lg"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2">
                <label>Email Address</label>
                <input
                  className="border p-2 rounded-lg"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2">
                <label>Password</label>
                <input
                  className="border p-2 rounded-lg"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="w-full my-4 py-4 rounded-full bg-[#10659d] shadow-lg shadow-[#10659d] text-white"
                type="submit"
              >
                Create Account
              </button>
              <div>
                <p>
                  Already have an account?{" "}
                  <a className="text-[#10659d]" href="./Login">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Registration;
