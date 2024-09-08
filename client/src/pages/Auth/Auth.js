import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../action/auth";
import "./Auth.css";
import icon from "../../assets/icon.png";
import Aboutauth from "./Aboutauth";

export default function Auth() {
  const [Issignup, SetIssignup] = useState(false);
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (Issignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
      console.log(name, email, password);
    } else {
      dispatch(login({ email, password }, navigate));
      console.log(email, password);
    }
  };

  const handleswitch = (e) => {
    SetIssignup(!Issignup);
    Setname("");
    Setemail("");
    Setpassword("");
  };

  return (
    <section className="auth-section">
      {Issignup && <Aboutauth />}
      <div className="auth-container-2">
        <img src={icon} alt="icon" className="login-logo" />
        <form onSubmit={handlesubmit}>
          {Issignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  Setname(e.target.value);
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
                Setemail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!Issignup && <p style={{ color: "#007ac6", fontSize: "13px" }}>Forget Password?</p>}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                Setpassword(e.target.value);
              }}
            />
          </label>
          <button type="submit" className="auth-btn">
            {Issignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>{Issignup ? "Already have an account" : "Don't have an account"}</p>
        <button type="button" className="handle-switch-btn" onClick={handleswitch}>
          {Issignup ? "Log In" : "Sign Up"}
        </button>
      </div>
    </section>
  );
}
