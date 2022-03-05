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
        <img
          src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80"
          alt={user.email}
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
