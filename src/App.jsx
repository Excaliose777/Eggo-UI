import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Disclaimer from "./components/Disclaimer";
import Features from "./components/Features";
import Review from "./components/Review";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <div className="top-section">
        <Navbar />
        <Hero />
      </div>
      <Disclaimer />
      <Features />
      <Review />
      <div className="top-section">
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
