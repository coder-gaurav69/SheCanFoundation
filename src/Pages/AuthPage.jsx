import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f6fafe] to-[#e8eefd] px-4 py-5">
      <div className="w-full max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="4" strokeWidth={1.5} fill="none" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Intern Portal</h1>
          <div className="text-gray-500 text-center mt-2 text-base">
            {tab === "signin"
              ? "Welcome back! Sign in to access your dashboard"
              : "Join our internship program today"}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-white shadow-md mb-7">
          <button
            className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
              tab === "signin"
                ? "bg-white text-indigo-700 shadow"
                : "text-gray-500"
            }`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
              tab === "signup"
                ? "bg-white text-indigo-700 shadow"
                : "text-gray-500"
            }`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {tab === "signin" ? <SignInForm navigate={navigate} /> : <SignUpForm navigate={navigate} />}
        </div>

        {/* Switch Links */}
        <div className="my-7 text-center">
          {tab === "signin" ? (
            <span className="text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => setTab("signup")}
                className="text-indigo-600 hover:underline transition-colors font-medium"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span className="text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => setTab("signin")}
                className="text-indigo-600 hover:underline transition-colors font-medium"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

// -- Sign In Form --
function SignInForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Navigate to the dashboard on successful sign-in
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2">Sign in to your account</div>
      <div className="text-gray-500 text-center">Enter your credentials to access your intern dashboard</div>
      <div>
        <label className="block mb-1 font-medium">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Email Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Password Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
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
    navigate('/');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2">Create your account</div>
      <div className="text-gray-500 text-center">Join our internship program and start making an impact</div>
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Name Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            type="text"
            required
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Email Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Password Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            type="password"
            required
            placeholder="Create a password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
      >
        Create Account
      </button>
    </form>
  );
}
