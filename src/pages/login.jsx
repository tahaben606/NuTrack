"use client";

import { useState } from "react";
import { ArrowRight, Utensils, Lock, Mail } from "lucide-react";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Login data:", { email, password });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container-login">
      <div className="login-box">
        <div className="logo-container">
          <Utensils className="logo-icon" />
          <h1 className="logo-text">Nutrack</h1>
        </div>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Track your nutrition journey with ease</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="label-text">Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password" className="label-text">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="forgot-password-container">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
            {!isLoading && <ArrowRight className="button-icon" />}
          </button>
        </form>

        <div className="signup-container">
          <p className="signup-text">Don't have an account?</p>
          <a href="signup" className="signup-link">Sign up</a>
        </div>
      </div>
    </div>
  );
}
