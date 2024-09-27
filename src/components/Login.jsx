import React, { useState } from "react";
import Greece from "../assets/Greece.jpg";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userName, password);
      setTimeout(() => {
        navigate("/hero");
      }, 1000);
      toast.success("Signed In Successfully!");
      //toast.loading('redirecting...')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto p-4" onSubmit={signIn}>
            <h1 className="text-3xl font-normal text-center">
              Login to your Account
            </h1>
            <h3 className="text-l font-normal text-center my-2">
              Welcome back! Enter your credentials
            </h3>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
            <p className="cursor-pointer text-[#10659d]">
              <a href=""></a>Forgot Password?
            </p>
            <button
              className=" w-full my-5 py-2 rounded-xl bg-[#10659d] shadow-xl shadow-[#10659d] text-white"
              type="submit"
            >
              Sign In
            </button>

            <button className="w-full my-5 rounded-xl flex justify-center google">
              <img
                src="https://cdn-icons-png.freepik.com/512/13170/13170545.png"
                alt=""
                className="h-10"
              />
              <p className="mt-2 font-medium">Sign In with Google</p>
            </button>
            <Toaster />
            <div>
              <p>
                Don't have an account yet?{" "}
                <a className="text-[#10659d]" href="./Registration">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div
          className="hidden sm:block mx-3 my-2 rounded-xl"
          style={{
            backgroundImage: `url(${Greece})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div
        className="flex justify-start"
        style={{ transform: "translateY(-5dvh)" }}
      >
        <div className="flex justify-between font-light text-gray-500 w-[40dvw] ms-10">
          <p>oceanbreeze</p>
          <p>Terms of use</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
