import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/slices/userSlice";
import { auth } from "../../services/firebaseService";

import { Avatar, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const NavOption = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const logOutApp = () => {
    setAnchorEl(null);
    dispatch(logout());
    auth.signOut();
  };

  const redirectToSetting = () => {
    setAnchorEl(null);
    navigator("/me/setting");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div
        className="headerOption nav"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar src={user?.photoURL} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
        <h3 className="headerOption__title" style={{ paddingRight: "10px" }}>
          Me
          <ArrowDropDownIcon className="headerOption_nav_icon" />
        </h3>
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={redirectToSetting}>Setting</MenuItem>
        <MenuItem onClick={logOutApp}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default NavOption;
