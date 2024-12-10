import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_products, loading, error } = useContext(ShopContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!all_products || all_products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="shop-category">
      <img
        className="shop-category__banner"
        src={props.banner || "default_banner_image.png"}
        alt="Category banner"
      />
      <div className="shop-category__index-sort">
        <p>
          <span>Showing 1-12</span> out of {all_products.length} products
        </p>
        <div className="shop-category__sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>
      <div className="shop-category__products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category__load-more">Explore More</div>
    </div>
  );
};

export default ShopCategory;
