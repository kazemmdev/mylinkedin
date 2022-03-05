import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

import { selectUser } from "../../store/slices/userSlice";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./HeaderOption.css";

const HeaderOption = ({
  title,
  Icon,
  avatar = false,
  active = false,
  onClick,
}) => {
  const user = useSelector(selectUser);

  return (
    <div className={"headerOption" + (active ? " active" : "")}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h3
        className="headerOption__title"
        style={avatar ? { paddingRight: "10px" } : null}
        onClick={onClick}
      >
        {title}
        {avatar && <ArrowDropDownIcon className="headerOption_nav_icon" />}
      </h3>
    </div>
  );
};

export default HeaderOption;
