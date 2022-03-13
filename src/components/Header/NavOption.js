import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/slices/userSlice";
import { auth } from "../../services/firebaseService";

import { Avatar, Menu, MenuItem } from "@mui/material";
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
        className="relative block ml-auto sm:ml-5 items-center h-8 w-8 cursor-pointer"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          sx={{ height: 32, width: 32 }}
          src={user?.photoURL}
          className="flex items-center justify-center h-8 w-8 mb-8"
        >
          {user?.email[0]}
        </Avatar>
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={redirectToSetting}>Setting</MenuItem>
        <MenuItem onClick={logOutApp}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default NavOption;
