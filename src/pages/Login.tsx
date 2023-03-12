import React from "react";
import "../styles.scss";

const Login = () => {
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
        </form>
        <p>
          Don't have an account?
          <br />
          Register here!
        </p>
      </div>
    </div>
  );
};

export default Login;
