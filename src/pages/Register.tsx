import React, { useState } from "react";
import "../styles.scss";
import { FcAddImage } from "react-icons/fc";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const imageFile = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      const storageRef = ref(storage, fullName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      console.log("uploadTask");

      uploadTask.on(
        (error) => {
          setError(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("uploadTask");

            await updateProfile(res.user, {
              displayName: fullName,
              photoURL: downloadURL,
            });
            console.log("uploadProfile");

            //registering users in database with their details
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: fullName,
              email,
              photoURL: downloadURL,
            });
            console.log("setDoc");

            //creating a new collection in database for chatUsers
            await setDoc(doc(db, "chatUsers", res.user.uid), {});

            navigate("/");
          });
        }
      );
    } catch (err) {
      if (err instanceof Error) {
        // setError(err.message);
        // console.error(err.message);
      }
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
          Login here!
        </p>
      </div>
    </div>
  );
};

export default Register;
