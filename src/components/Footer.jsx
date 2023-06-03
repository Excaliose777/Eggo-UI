import React from "react";
import TwitterIcon from '../assets/TwitterIcon.png'
import LinkedinIcon from '../assets/LinkedinIcon.png'
import InstagramIcon from '../assets/InstagramIcon.png'
import Egg from "../assets/Egg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first-grid">
        <div className="footer-logo">
          <img src={Egg} />
          <h3>Eggo</h3>
        </div>
        <div>
          <p>123 Park Ave, Ikoyi Lagos Nigeria</p>
          <p>© Copyright 2023, All rights reserved.</p>
          <img src={LinkedinIcon} style={{marginLeft:0}}/>
          <img src={TwitterIcon}/>
          <img src={InstagramIcon}/>
        </div>
      </div>

      <div className="footer-link">
        <div className="footer-links">
          <h4>About Us</h4>
          <h4>Pricing</h4>
          <h4>Templates</h4>
          <h4>Careers</h4>
        </div>
        <div className="footer-links">
          <h4>Privacy Policy</h4>
          <h4>Terms Of Use</h4>
          <h4>Security</h4>
          <h4>Customer Support</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
