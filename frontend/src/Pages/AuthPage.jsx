import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eaff] via-[#f3f6fd] to-[#dbe2f7] px-4 py-10">
        <div className="w-full max-w-md backdrop-blur-md bg-white/60 rounded-3xl p-8 shadow-2xl border border-white/30 transition-all">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-indigo-100 p-5 rounded-full mb-3 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="8" r="4" strokeWidth={1.5} fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">Intern Portal</h1>
            <p className="text-gray-500 text-center mt-2">
              {tab === "signin"
                ? "Welcome back! Sign in to access your dashboard"
                : "Join our internship program today"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-white/70 backdrop-blur-sm rounded-xl mb-7 shadow-inner p-1">
            <button
              className={`flex-1 py-2 text-lg font-semibold rounded-xl transition-all duration-300 ${
                tab === "signin" ? "bg-white shadow text-indigo-700" : "text-gray-500 hover:text-indigo-600"
              }`}
              onClick={() => setTab("signin")}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-lg font-semibold rounded-xl transition-all duration-300 ${
                tab === "signup" ? "bg-white shadow text-indigo-700" : "text-gray-500 hover:text-indigo-600"
              }`}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="transition-all duration-300">
            {tab === "signin" ? <SignInForm navigate={navigate} /> : <SignUpForm navigate={navigate} />}
          </div>

          {/* Switch Links */}
          <div className="my-7 text-center text-gray-500 text-sm">
            {tab === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setTab("signup")}
                  className="text-indigo-600 hover:underline font-medium transition"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setTab("signin")}
                  className="text-indigo-600 hover:underline font-medium transition"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable Input Component
const InputField = ({ type, placeholder, label }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <div className="relative">
      <input
        className="w-full pl-4 pr-3 py-2 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
        type={type}
        required
        placeholder={placeholder}
      />
    </div>
  </div>
);

// -- Sign In Form --
function SignInForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-3 text-gray-700">Sign in to your account</div>
      <div className="text-gray-500 text-center text-sm mb-4">Enter your credentials to access your intern dashboard</div>
      <InputField type="email" label="Email Address" placeholder="Enter your email" />
      <InputField type="password" label="Password" placeholder="Enter your password" />
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl mt-3 text-lg shadow-lg transition-transform hover:scale-[1.02]"
      >
        Sign In
      </button>
    </form>
  );
}

// -- Sign Up Form --
function SignUpForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-3 text-gray-700">Create your account</div>
      <div className="text-gray-500 text-center text-sm mb-4">Join our internship program and start making an impact</div>
      <InputField type="text" label="Full Name" placeholder="Enter your full name" />
      <InputField type="email" label="Email Address" placeholder="Enter your email" />
      <InputField type="password" label="Password" placeholder="Create a password" />
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl mt-3 text-lg shadow-lg transition-transform hover:scale-[1.02]"
      >
        Create Account
      </button>
    </form>
  );
}
