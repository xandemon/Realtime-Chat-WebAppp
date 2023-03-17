import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles.scss";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(`${currentUser.displayName} inside login`);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user);
      console.log("Login successful");
      // setCurrentUser(user)
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error(err.message);
      }
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <h2>Sandesh Chat App</h2>
        <form onSubmit={handleSubmit}>
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
