import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box__navigator">
        <div className="description-box__nav-tab">Description</div>
        <div className="description-box__nav-tab description-box__nav-tab--inactive">Reviews (122)</div>
      </div>
      <div className="description-box__content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          excepturi quidem. Vitae error perferendis quam recusandae dolore
          officiis expedita dolor! Quaerat voluptas inventore nobis debitis vel?
          Repellendus dolor animi excepturi!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
          sapiente natus libero sit provident officiis labore perspiciatis non
          eligendi doloremque suscipit asperiores nisi saepe nihil ad minus,
          maiores explicabo odit.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
