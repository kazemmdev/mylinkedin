import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

import TextField from "@mui/material/TextField";
import linkedin from "../assets/linkedin.png";
import CircularProgress from "@mui/material/CircularProgress";

import "./style.css";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginToApp = (e) => {
    e.preventDefault();
    setLoading(true);

    login(email, password)
      .then(() => {
        setLoading(false);
        navigator("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div className="login">
      <img src={linkedin} alt="linkedin" />
      <form onSubmit={loginToApp}>
        <TextField
          required
          label="Email"
          margin="normal"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Password"
          margin="normal"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Sign In
          {loading && (
            <CircularProgress
              style={{ height: 25, width: 25, color: "white", marginLeft: 10 }}
            />
          )}
        </button>
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
