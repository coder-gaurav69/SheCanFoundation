import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.avif"

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuth = useLocation().pathname.includes('/auth');


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="FundRaise Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {isAuth?"":<button
              onClick={() => navigate('/auth')}
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Sign In
            </button>}
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/leaderboard')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Leaderboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-2xl">
          {!isAuth && <button
            onClick={() => { navigate('/auth'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium"
          >
            Sign In
          </button>}
          <button
            onClick={() => { navigate('/dashboard'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium"
          >
            Dashboard
          </button>
          <button
            onClick={() => { navigate('/leaderboard'); setMenuOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
          >
            Leaderboard
          </button>
        </div>
      )}
    </nav>
  );
}
