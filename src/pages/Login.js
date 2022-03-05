import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";
import TextField from "@mui/material/TextField";
import linkedin from "../assets/linkedin.png";

import "./style.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            uid: userAuth.user.uid,
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
        navigator("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedin} alt="linkedin" />
      <form onSubmit={loginToApp}>
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
        <button type="submit">Sign In</button>
      </form>
      <p>
        New to My LinkedIn?
        <Link to="/signup" className="login__register">
          Join
        </Link>
      </p>
    </div>
  );
};

export default Login;
