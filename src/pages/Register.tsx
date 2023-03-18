import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { FcAddImage } from "react-icons/fc";
import "../styles.scss";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const imageFile = event.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("New user registered!", res.user);

      const storageRef = ref(storage, displayName);
      await uploadBytesResumable(storageRef, imageFile).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
        });
      });
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      console.log(err);
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <h2>Sandesh Chat App</h2>
        <form onSubmit={handleSubmit}>
          <input name="fullname" type="text" placeholder="Full Name" required />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <label htmlFor="profileimage">
            <FcAddImage size={30} /> <span>Upload your image</span>
          </label>
          <input type="file" name="profileimage" id="profileimage" />
          <button type="submit">Register</button>
          {error && <span>{error}</span>}
        </form>
        <p>
          Already have an account?
          <br />
          <Link to="/login">Login here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
