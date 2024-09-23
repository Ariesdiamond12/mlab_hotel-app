import React, {useState} from "react";
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
    e.preventDefault();
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
    <div className="relative w-full h-screen bg-zinc-900/90 ">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={Village}
        alt="church"
      />

      <div className="flex justify-center  items-center h-full ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md" onSubmit={signIn}>
          <h2 className="text-3xl font-bold text-center py-8">
            Create An Account
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
              className="border relative p-2 rounded-lg"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email Address</label>
            <input
              className="border relative p-2 rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border relative p-2 rounded-lg"
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
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
