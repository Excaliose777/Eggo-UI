import React, { useLayoutEffect, useRef } from "react";
import Egg from "../assets/Egg.png";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".nav-logo, .nav-menu, .nav-btn", {
        y: 50,
        duration: 1,
        // opacity: 0,
        autoAlpha:0,
        stagger:0.3,
        delay: 0.2,
        // ease: "elastic",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div className="nav" ref={navRef}>
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
