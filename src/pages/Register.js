import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import linkedin from "../assets/linkedin.png";

import "./style.css";

const Register = () => {
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    register(email, password, name, photoURL)
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
      <form onSubmit={handleRegister}>
        <TextField
          required
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
          Register
          {loading && (
            <CircularProgress
              style={{ height: 25, width: 25, color: "white", marginLeft: 10 }}
            />
          )}
        </button>
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
