import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Setting = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        navigator("login");
      }
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
          <form onSubmit={handleProfileUpdate} className="app__setting">
            {/* <TextField */}
            {/* label="Full Name" */}
            {/* margin="normal" */}
            {/* // value={name} */}
            {/* // onChange={(e) => setName(e.target.value)} */}
            {/* /> */}
          </form>
        </div>
      </React.Fragment>
    );
  } else return null;
};

export default Setting;
