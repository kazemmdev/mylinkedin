import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import { fetchUser } from "../services/authService";

import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";

const Home = () => {
  const navigator = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    fetchUser().catch(() => {
      navigator("login");
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
