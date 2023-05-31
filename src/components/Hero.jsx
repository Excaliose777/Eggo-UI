import React from "react";
import Lottie from "lottie-react";
import Purple from '../assets/Lottie/Purple.json'
import Trillo from "../assets/Trillosvg.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div>
          <h1>
            TIRED OF OXE? WE <br /> CREATED EGGO JUST <br />
            FOR YOU.
          </h1>
          <h4>
            Eggo is the new and faster way for teams to collaborate and get work
            <br />
            done efficiently. We are kinda like Oxe but you&apos;ll like us
            better
          </h4>
        </div>

        <div className="hero-btn">
          <Lottie animationData={Purple} className="hero-btn-img"/>
          <button>Get Started at $0.00</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
