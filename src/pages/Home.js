import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";

import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  if (user) {
    return (
      <React.Fragment>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </React.Fragment>
    );
  } else return null;
};

export default Home;
