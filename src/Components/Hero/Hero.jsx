import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero__hand_icon">
            <p>new</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero__latest_btn">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="hero__right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
