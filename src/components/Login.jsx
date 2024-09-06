import React from "react";
import Greece from "../assets/Greece.jpg";

function Login() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto p-4">
            <h1 className="text-3xl font-normal text-center">
              Login to your Account
            </h1>
            <h3 className="text-l font-normal text-center my-2">
              Welcome back! Enter your credentials
            </h3>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2 rounded-lg" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2 rounded-lg" type="password" />
            </div>
            <button className=" w-full my-5 py-2 rounded-lg bg-[#10659d] shadow-lg shadow-[#10659d] text-white">
              Sign In
            </button>
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
