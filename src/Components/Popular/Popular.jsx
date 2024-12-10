import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/popularinwomen`)
      .then((res) => res.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className="popular">
      <h1 className="popular__title">
        POPULAR IN WOMAN <hr className="popular__divider" />
      </h1>
      <div className="popular__items">
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
