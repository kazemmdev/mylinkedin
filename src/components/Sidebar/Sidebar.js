import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

import { selectUser } from "../../store/slices/userSlice";

import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={user.picProfile} alt={user.email} />
        <Avatar
          src={user.photoURL}
          className="sidebar__avatar"
          sx={{ width: 56, height: 56 }}
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.bio}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">23</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">265</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("devops")}
        {recentItem("design")}
        {recentItem("develop")}
      </div>
    </div>
  );
};

export default Sidebar;
