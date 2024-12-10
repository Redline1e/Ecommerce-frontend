import React, { useContext } from "react";
import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  // Функція для показу сповіщення
  const handleAddToCart = () => {
    addToCart(product.id);
    toast.success("Successfully added to cart!", {
      position: "top-center",
      autoClose: 2500,
      transition: Bounce,
    });
  };

  return (
    <div className="product-display">
      <div className="product-display__left">
        <div className="product-display__thumbnail-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display__main-thumbnail">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="product-display__right">
        <h1 className="product-display__title">{product.name}</h1>

        <div className="product-display__stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>

        <div className="product-display__prices">
          <div className="product-display__price--old">
            ${product.old_price}
          </div>
          <div className="product-display__price--new">
            ${product.new_price}
          </div>
        </div>

        <p className="product-display__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          dicta suscipit nihil reiciendis fuga, beatae possimus praesentium
          voluptate quae nemo.
        </p>

        <div className="product-display__size-section">
          <h1 className="product-display__size-title">Select Size</h1>
          <div className="product-display__sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button
          className="product-display__add-to-cart"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>

        <p className="product-display__category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display__tags">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDisplay;
