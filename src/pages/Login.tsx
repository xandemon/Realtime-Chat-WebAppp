import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles.scss";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logInAccount = async (event: any) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully:");
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.log(err);
      }
    }
  };
  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <h2>Sandesh Chat App</h2>
        <form onSubmit={logInAccount}>
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
