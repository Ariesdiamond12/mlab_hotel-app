import React from "react";

function Registration() {
  return (
    <div>
      <>
        <div
          className="h-screen w-full bg-cover bg-zinc-900/90 mix-blend-overlay bg-no-repeat relative bg-center object-fit-contain"
          style={{ backgroundImage: `url(${Field})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
          <div className="flex justify-center items-center h-full relative z-10">
            <form className="max-w-[400px] w-full rounded-md mx-auto bg-white p-8 mx-5">
              <h2 className="text-4xl font-semibold text-center py-8">
                Get Started
              </h2>
              <div className="flex flex-col py-2">
                <label>Name</label>
                <input className="border p-2 rounded-lg" type="text" />
              </div>
              <div className="flex flex-col py-2">
                <label>Surname</label>
                <input className="border p-2 rounded-lg" type="text" />
              </div>
              <div className="flex flex-col py-2">
                <label>Email Address</label>
                <input className="border p-2 rounded-lg" type="email" />
              </div>
              <div className="flex flex-col py-2">
                <label>Password</label>
                <input className="border p-2 rounded-lg" type="password" />
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <button className="w-full my-4 py-4 rounded-full bg-[#a6c48a] shadow-lg shadow-[#a6c48a] text-white">
                Create Account
              </button>
              <div>
                <p>
                  Already have an account yet?{" "}
                  <a className="text-[#a6c48a]" href="./Login">
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