import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Disclaimer from "./components/Disclaimer";
import Features from "./components/Features";
import Review from "./components/Review";

function App() {
  return (
    <>
      <div className="top-section">
        <Navbar />
        <Hero />
      </div>
      <Disclaimer/>
      <Features/>
      <Review/>
    </>
  );
}

export default App;
