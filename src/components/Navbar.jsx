import React from "react";
import Egg from "../assets/Egg.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Egg} color="black" />
        <h1> Eggo </h1>
      </div>

      <div className="nav-menu">
          <h4>Features</h4>
          <h4>Pricing</h4>
          <h4>Templates</h4>
          <h4>Careers</h4>
      </div>

      <div className="nav-btn">
        <h3>Book a Demo</h3>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
