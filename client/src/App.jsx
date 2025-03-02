import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home , Dashboard , Login , Signup, Chat , EventTimeline}from "./Pages";
import { Navbar } from "./components";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen   bg-slate-800">
        <Navbar />
        <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/timeline" element={<EventTimeline />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;