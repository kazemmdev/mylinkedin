import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";

import linkedin from "../assets/linkedin.png";

import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [picPofile, setPicPofile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) return alert("Please enter your name for register");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: picPofile,
          })
          .then(() => {
            dispatch(
              login({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: name,
                photoURL: picPofile,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedin} alt="linkedin" />
      <form onSubmit={loginToApp}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Full name"
        />
        <input
          onChange={(e) => setPicPofile(e.target.value)}
          value={picPofile}
          type="text"
          placeholder="Profile pic Url"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
