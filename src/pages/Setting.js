import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import { fetchUser } from "../services/authService";
import Header from "../components/Header/Header";
import { CircularProgress, TextField } from "@mui/material";

const Setting = () => {
  const navigator = useNavigate();
  const user = useSelector(selectUser);

  const [name, setName] = useState(user.displayName);
  const [bio, setBio] = useState(user.displayName);
  const [avatar, setAvatar] = useState(user.photoUrl);
  const [picProfile, setPicProfile] = useState(user.displayName);
  const [loading, setLoading] = useState(false);
  // add bio and profile photo to user data
  // setting page can update it
  // responsive home page
  // add some loader to home page

  useEffect(() => {
    fetchUser().catch(() => {
      navigator("login");
    });
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
  };

  if (user) {
    return (
      <React.Fragment>
        <Header isHome={false} />
        <div className="app__body">
          <div className="app__setting">
            <h2>Update Your Setting</h2>
            <form onSubmit={handleProfileUpdate}>
              <TextField
                fullWidth
                label="Your Full Name"
                variant="standard"
                id="full-name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Your Bio"
                variant="standard"
                id="bio"
                margin="normal"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <TextField
                fullWidth
                label="Your Avatar (URL)"
                variant="standard"
                id="avatar"
                margin="normal"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <TextField
                fullWidth
                label="Your Profile Picture (URL)"
                variant="standard"
                id="picProfile"
                margin="normal"
                value={picProfile}
                onChange={(e) => setPicProfile(e.target.value)}
              />
              <button type="submit">
                Update
                {loading && (
                  <CircularProgress
                    style={{
                      height: 25,
                      width: 25,
                      color: "white",
                      marginLeft: 10,
                    }}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  } else return null;
};

export default Setting;
