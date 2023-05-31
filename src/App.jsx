import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Disclaimer from "./components/Disclaimer";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className="top-section">
        <Navbar />
        <Hero />
      </div>
      <Disclaimer/>
      <Features/>
    </>
  );
}

export default App;
