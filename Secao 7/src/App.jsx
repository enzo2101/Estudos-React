import { useState } from "react";
import "./App.css";

// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>React Router</h1>
      {/* 2- links com react router */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
