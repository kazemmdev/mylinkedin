import { useNavigate } from "react-router-dom";
import HeaderOption from "./HeaderOption";
import Logo from "../../assets/linkedin.svg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavOption from "./NavOption";

import "./Header.css";

function Header({ isHome = true }) {
  const navigator = useNavigate();
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
          <HeaderOption
            Icon={HomeIcon}
            title="Home"
            active={isHome}
            onClick={() => navigator("/")}
          />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messageing" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <NavOption />
        </div>
      </div>
    </div>
  );
}

export default Header;
