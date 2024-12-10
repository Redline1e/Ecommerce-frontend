import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("navbar__menu--visible");
    e.target.classList.toggle("navbar__dropdown--open");
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-image" src={logo} alt="Shopper logo" />
        <p className="navbar__logo-text">SHOPPER</p>
      </div>
      <img
        className="navbar__dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="Dropdown toggle"
      />
      <ul ref={menuRef} className="navbar__menu">
        <li
          className={`navbar__menu-item ${
            menu === "shop" ? "navbar__menu-item--active" : ""
          }`}
          onClick={() => setMenu("shop")}
        >
          <Link className="navbar__link" to="/">
            Shop
          </Link>
          {menu === "shop" && <hr className="navbar__menu-underline" />}
        </li>
        <li
          className={`navbar__menu-item ${
            menu === "mens" ? "navbar__menu-item--active" : ""
          }`}
          onClick={() => setMenu("mens")}
        >
          <Link className="navbar__link" to="/mens">
            Men
          </Link>
          {menu === "mens" && <hr className="navbar__menu-underline" />}
        </li>
        <li
          className={`navbar__menu-item ${
            menu === "womans" ? "navbar__menu-item--active" : ""
          }`}
          onClick={() => setMenu("womans")}
        >
          <Link className="navbar__link" to="/womens">
            Woman
          </Link>
          {menu === "womans" && <hr className="navbar__menu-underline" />}
        </li>
        <li
          className={`navbar__menu-item ${
            menu === "kids" ? "navbar__menu-item--active" : ""
          }`}
          onClick={() => setMenu("kids")}
        >
          <Link className="navbar__link" to="/kids">
            Kids
          </Link>
          {menu === "kids" && <hr className="navbar__menu-underline" />}
        </li>
      </ul>
      <div className="navbar__login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            className="navbar__button"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="navbar__button">Login</button>
          </Link>
        )}
        <Link to="/cart" className="navbar__cart">
          <img className="navbar__cart-icon" src={cart_icon} alt="Cart" />
        </Link>
        <div className="navbar__cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
