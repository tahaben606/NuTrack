"use client"

import { useState } from "react";
import { ArrowRight, Utensils, Lock, Mail, User } from 'lucide-react';
import './login.css';

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Signing up with:", { name, email, password });
      setIsLoading(false);
      // Add registration logic here
    }, 1000);
  };

  return (
    <div className="container-login">
      <div className="login-box">
        <div className="logo-container">
          <Utensils className="logo-icon" />
          <h1 className="logo-text">Nutrack</h1>
        </div>
        
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Start your nutrition journey today</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="label-text">
              Full Name
            </label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                id="name"
                type="text"
                className="input-field"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="email" className="label-text">
              Email
            </label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                id="email"
                type="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="password" className="label-text">
              Password
            </label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                id="password"
                type="password"
                className="input-field"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'} 
            {!isLoading && <ArrowRight className="button-icon" />}
          </button>
        </form>
        
        <div className="signup-container">
          <p className="signup-text">Already have an account?</p>
          <a href="login" className="signup-link">Login</a>
        </div>
      </div>
    </div>
  );
}
