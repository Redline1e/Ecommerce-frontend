import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__content">
        <div className="offers__content-left">
          <h1 className="offers__title">Exclusive</h1>
          <h1 className="offers__title">Offers For You</h1>
          <p className="offers__subtitle">ONLY BEST SELLING PRODUCTS</p>
          <button className="offers__button">Check Now</button>
        </div>
        <div className="offers__content-right">
          <img className="offers__image" src={exclusive_image} alt="Exclusive Offer" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
