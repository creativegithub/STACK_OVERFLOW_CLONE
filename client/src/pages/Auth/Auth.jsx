import React, { useState } from "react";
import "./Auth.css";
import Aboutauth from "./Aboutauth.jsx";
import Icon from "../../assets/icon.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../action/auth";

const Auth = () => {
  const [issignup, setIssignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter email and password");
    }

    if (issignup) {
      if (!name) {
        alert("Enter your name");
      }
      dispatch(signup({ name, email, password }, navigate));
      // console.log(name, email, password);
    } else {
      dispatch(login({ email, password }, navigate));
      // console.log(email, password);
    }
  };

  const handleSwitch = () => {
    setIssignup(!issignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="auth-section">
      {issignup && <Aboutauth />}
      <div className="auth-container-2">
        <img src={Icon} alt="icon" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {issignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!issignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit" className="auth-btn">
            {issignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>
          {issignup ? "Already have an account?" : "Don't have an account"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {issignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
