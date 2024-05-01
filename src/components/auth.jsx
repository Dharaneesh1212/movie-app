import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState("sign-up");

  const handleTabToggle = () => {
    setActiveTab(activeTab === "sign-up" ? "sign-in" : "sign-up");
  };

  return (
    <main id="auth" className="flex items-center justify-center bg-white m-8">
      <div className="flex items-center justify-center flex-row bg-white rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-up" ? "" : "hidden"
          }`}
        >
          <form
            id="signupform"
            className="flex items-center justify-center flex-col gap-8 w-[23rem]"
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Create Account
            </h1>
            <input
              type="text"
              placeholder="Name"
              id="inputone"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              id="inputtwo"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              id="inputthree"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-500 hover:to-indigo-500 rounded-md font-sans font-medium text-lg">
              Sign Up
            </button>
            <button
              className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-cyan-500 rounded-md font-mono font-medium text-xl"
              onClick={handleTabToggle}
            >
              <FcGoogle />
            </button>
          </form>
        </div>
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-in" ? "" : "hidden"
          }`}
        >
          <form
            id="signinform"
            className="flex items-center justify-center flex-col gap-10 w-[23rem]"
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Sign In
            </h1>
            <input
              type="email"
              placeholder="Email"
              id="inputfour"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              id="inputfive"
              className="animate__animated animate__zoomIn h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-indigo-500 hover:to-pink-400 rounded-md font-sans font-medium text-lg">
              Sign In
            </button>
          </form>
        </div>
        <div>
          <div className="flex items-center justify-center flex-row">
            <div
              id="signin"
              className={`bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-in" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Back !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign Up
              </button>
            </div>
            <div
              id="signup"
              className={`bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-up" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Friend !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthContainer;
