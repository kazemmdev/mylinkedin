import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ title, Icon, avatar = false, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title" onClick={onClick}>
        {title}
      </h3>
    </div>
  );
};

export default HeaderOption;
