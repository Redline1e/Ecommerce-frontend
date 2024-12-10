import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Імпортуємо стилі для Toastify
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const response = await fetch("http://localhost:4000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success("You have successfully subscribed to our newsletter!");
    } else {
      toast.error(data.message || "Error subscribing. Please try again.");
    }
  };

  return (
    <div className="newsletter">
      <h1 className="newsletter__title">Get Exclusive Offers On Your Email</h1>
      <p className="newsletter__subtitle">Subscribe to our newsletter and stay updated</p>
      <div className="newsletter__form">
        <input
          className="newsletter__input"
          type="email"
          placeholder="Your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="newsletter__button" onClick={handleSubmit}>
          Subscribe
        </button>
      </div>

      <ToastContainer
        position="top-center" 
        autoClose={2500} 
      />
    </div>
  );
};

export default NewsLetter;
