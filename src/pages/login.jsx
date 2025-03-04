import { useState } from "react";
import './login.css';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add authentication logic here
  };

  return (
    <div className="container-login">
      <div className="login-box-login">
        <h2 className="login-title-login">Login</h2>
        <form className="login-form-login" onSubmit={handleSubmit}>
          <div className="input-group-login">
            <label htmlFor="email" className="label-text-login">Email</label>
            <input
              id="email"
              type="email"
              className="input-field-login"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group-login">
            <label htmlFor="password" className="label-text-login">Password</label>
            <input
              id="password"
              type="password"
              className="input-field-login"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <a href="signup"  className="forgot-link-login">sign up</a>
          <button type="submit" className="login-button-login">Login</button>
        </form>
      </div>
    </div>
  );
}
