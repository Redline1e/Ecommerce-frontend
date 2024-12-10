import React, { useEffect, useState } from "react";
import "./ReletedProducts.css";
import Item from "../Item/Item";

const ReletedProducts = () => {
  const [reletedProducts, setReletedProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/reletedproducts`)
      .then((res) => res.json())
      .then((data) => setReletedProducts(data));
  }, []);
  return (
    <div className="releted-products">
      <h1 className="releted-products__title">Related Products</h1>
      <hr className="releted-products__divider" />
      <div className="releted-products__items">
        {reletedProducts.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default ReletedProducts;
