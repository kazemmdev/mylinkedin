import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderOption from "./HeaderOption";
import { auth } from "../../services/firebaseService";
import { logout, selectUser } from "../../store/slices/userSlice";

import Logo from "../../assets/linkedin.svg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" active={true} />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messageing" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption title="Me" avatar={true} onClick={logOutApp} />
        </div>
      </div>
    </div>
  );
}

export default Header;
