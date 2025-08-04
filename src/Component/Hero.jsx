import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth' 
  });
  };

  return (
    <section className="pt-14 pb-10 text-center bg-gradient-to-r from-[#f6fafe] to-[#eef0fb]">
      <div className="mb-4">
        <span className="inline-block bg-[#eef0fb] text-indigo-600 px-4 py-1 rounded-full font-medium text-sm">
          🎉 Join 1,000+ Interns Making a Difference
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-black text-[#1a1a2e] mb-3">
        Fundraise with <span className="text-indigo-600">Purpose</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Join our intern community and make a real impact. Track your fundraising progress,
        earn rewards, and help create positive change in the world.
      </p>
      <div>
        <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-md px-7 py-3 text-lg mr-3" onClick={() => navigate('/leaderboard')}>
          LeaderBoard &rarr;
        </button>
        <button className="bg-white hover:bg-gray-100 border border-gray-200 font-semibold rounded-md px-6 py-3 text-lg" onClick={handleScroll}>
          Learn More
        </button>
      </div>
    </section>
  );
}
