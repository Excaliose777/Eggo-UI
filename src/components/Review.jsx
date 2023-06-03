import React from "react";
import Twitter from '../assets/Twitter.png'
import Twitter2 from '../assets/Twitter2.png'
import Instagram from '../assets/Instagram.png'
import Image from '../assets/Image.png'
import Image2 from '../assets/Image2.png'

const Review = () => {
  return (
    <div className="review">
      <div className="review-header">
        <h1>
          IN JUST 1 YEAR OF GOING <br /> LIVE, SEE WHAT USERS <br />
          ARE SAYING
        </h1>
      </div>


      <div className="social-reviews">
        <div className="review-card">
          <p>
            "Very inspiring working experience with their representatives,
            responsible and active in communication during project, provide
            timely response in all feedback, with high quality delivery of final
            work."
          </p>

          <button style={{backgroundColor:'#EFF5FF'}}>@jaredletgo <img src={Twitter}/></button>
        </div>

        <div className="review-card">
          <p>
            "I started using few months eggo and it&apos;s made collaboration
            with other teams so much fun"
          </p>
          <img src={Image}/>
          <button style={{backgroundColor:'#FFEAEF'}}>@saldsgnstudio <img src={Instagram}/></button>
        </div>

        <div className="review-card">
          <p>
            "The partner been progressing well with the business change
            environment, talents of new skill set might be an importance area to
            look into it plus agile process for both to excel in future."
          </p>
          <button style={{backgroundColor:'#53A3ED', color:'white'}}>@jaredletgo <img src={Twitter2}/></button>
        </div>

        <div className="review-card">
          <p>
            "The service provided is incredible, the insights and knowledge that
            the team."
          </p>
          <img src={Image2}/>
          <button style={{backgroundColor:'#FFEAEF'}}>@saldsgnstudio <img src={Instagram}/></button>
        </div>

        
        <div className="review-card">
          <p>
            "The partner been progressing well with the business change
            environment, talents of new skill set might be an importance area to
            look into it plus agile process for both to excel in future."
          </p>
          <button style={{backgroundColor:'#53A3ED', color:'white'}}>@jaredletgo <img src={Twitter2}/></button>
        </div>

        <div className="review-card">
          <p>
            "The service provided is incredible, the insights and knowledge that
            the team."
          </p>
          <img src={Image2}/>
          <button style={{backgroundColor:'#FFEAEF'}}>@saldsgnstudio <img src={Instagram}/></button>
        </div>
        
      </div>

      
    </div>
  );
};

export default Review;
