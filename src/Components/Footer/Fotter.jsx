import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footer_logo} alt="" />
        <p className="footer__logo-text">SHOPPER</p>
      </div>
      <ul className="footer__links">
        <li className="footer__link-item">Company</li>
        <li className="footer__link-item">Products</li>
        <li className="footer__link-item">Offices</li>
        <li className="footer__link-item">About</li>
        <li className="footer__link-item">Contact</li>
      </ul>
      <div className="footer__social">
        <div className="footer__icon-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer__icon-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>
        <div className="footer__icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer__copyright">
        <hr className="footer__divider" />
        <p>Copyright © 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
