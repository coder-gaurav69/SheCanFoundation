import React from "react";
import LandingPage from "./Pages/Landing";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/Dashboard";
import LeaderBoard from "./Pages/LeaderBoard";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
  );
}

export default App;
