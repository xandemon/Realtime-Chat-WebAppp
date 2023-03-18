import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Login = () => {
  const [error, setError] = useState("");
  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <h2>Sandesh Chat App</h2>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
          {error && <span>{error}</span>}
        </form>
        <p>
          Don't have an account?
          <br />
          <Link to="/register">Register here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
