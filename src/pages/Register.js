import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";
import { TextField } from "@mui/material";
import linkedin from "../assets/linkedin.png";

import "./style.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (!name) return alert("Please enter your name for register");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              login({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: name,
                photoURL: photoURL,
              })
            );
            navigator("/");
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedin} alt="linkedin" />
      <form onSubmit={register}>
        <TextField
          label="Full Name"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Photo of Profile (URL)"
          margin="normal"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <TextField
          label="Email"
          margin="normal"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          margin="normal"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already on My LinkedIn?
        <Link to="/login" className="login__register">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
