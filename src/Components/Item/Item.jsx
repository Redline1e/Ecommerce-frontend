import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item-container">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          onClick={window.scrollTo(0, 0)}
          alt=""
          className="item-container__image"
        />
      </Link>
      <p className="item-container__name">{props.name}</p>
      <div className="item-container__prices">
        <div className="item-container__price-new">${props.new_price}</div>
        <div className="item-container__price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
