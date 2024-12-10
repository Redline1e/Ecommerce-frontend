import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const notify = (type, message) => {
    const options = {
      position: "top-center",
      autoClose: 2500,
      transition: Bounce,
    };

    if (type === "success") {
      toast.success(message, options);
    } else {
      toast.error(message, options);
    }
  };

  const handleValidationErrors = (errors) => {
    if (errors) {
      errors.forEach((error) => {
        notify("error", error.msg);
      });
    }
  };

  const login = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const responseData = await response.json();
      console.log("Response data:", responseData); // Додатковий лог для діагностики

      if (response.ok && responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        notify("success", "Login successful!");
        setTimeout(() => window.location.replace("/"), 1000);
      } else {
        handleValidationErrors(responseData.errors || responseData.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      notify("error", "Error during login. Please try again later.");
    }
  };

  const signup = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const responseData = await response.json();
      console.log("Response data:", responseData); // Додатковий лог для діагностики

      if (response.ok && responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        notify("success", "Signup successful!");
        setTimeout(() => window.location.replace("/"), 1000);
      } else {
        handleValidationErrors(responseData.errors || responseData.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
      notify("error", "Error during signup. Please try again later.");
    }
  };

  return (
    <div className="login-signup">
      <div className="login-signup__container">
        <h1 className="login-signup__title">{state}</h1>
        <div className="login-signup__fields">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="login-signup__input"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="login-signup__input"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="login-signup__input"
          />
        </div>
        <button
          className="login-signup__button"
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-signup__login">
            Already have an account?{" "}
            <span
              className="login-signup__login-link"
              onClick={() => setState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="login-signup__login">
            Create an account?{" "}
            <span
              className="login-signup__login-link"
              onClick={() => setState("Sign Up")}
            >
              Click here
            </span>
          </p>
        )}

        <div className="login-signup__agree">
          <input type="checkbox" className="login-signup__checkbox" />
          <p className="login-signup__agree-text">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        pauseOnFocusLoss={false}
        transition={Bounce}
      />
    </div>
  );
};

export default LoginSignup;
