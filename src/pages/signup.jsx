import { useState } from "react";
import './login.css';

export default function LoginPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { name, email });
    // Add authentication logic here
  };

  return (
    <div className="container-login">
      <div className="login-box-login">
        <h2 className="login-title-login">Sign UP</h2>
        <form className="login-form-login" onSubmit={handleSubmit}>
          <div className="input-group-login">
            <label htmlFor="name" className="label-text-login">Name</label>
            <input
              id="name"
              type="name"
              className="input-field-login"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div className="input-group-login">
            <label htmlFor="email" className="label-text-login">email</label>
            <input
              id="email"
              type="text"
              className="input-field-login"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="input-group-login">
            <label htmlFor="email" className="label-text-login">password</label>
            <input
              id="password"
              type="[password]"
              className="input-field-login"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpasword(e.target.value)}
              required
            />
          </div>
          
          <a href="login"  className="forgot-link-login">login</a>
          <button type="submit" className="login-button-login">Sign up</button>
        </form>
      </div>
    </div>
  );
}
