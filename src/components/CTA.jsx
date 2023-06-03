import React from "react";
import Wiggly from "../assets/Wiggly.png";

import Lottie from "lottie-react";
import Orange from '../assets/Lottie/Orange.json'
import Green from '../assets/Lottie/Green.json'

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-main">
        <div>
          <h1>
            READY FOR <br /> EGGCELENCE? <br />
            <span>
              <img src={Wiggly} />
            </span>
          </h1>
          <p>
            With Eggo work can be fun again. Collaborate faster <br /> and more
            efficiently with your team.
          </p>
          <button className="first-cta-btn"
            style={{
              backgroundColor: "#1A1A1A",
              color: "white",
              border: "1px solid black",
            }}
          >
            Get Started at $0.00
          </button>
          <button className="second-cta-btn"
            style={{
              backgroundColor: "transparent",
              border: "1px solid black",
            }}
          >
            Book a Demo
          </button>
        </div>

        <div className="cta-lottie">
            <Lottie animationData={Orange} style={{height:'280px', transform:'translateX(55px)'}}/>
            <Lottie animationData={Green} style={{height:'280px'}}/>
        </div>
      </div>
    </div>
  );
};

export default CTA;
