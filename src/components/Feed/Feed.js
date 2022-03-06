import FlipMove from "react-flip-move";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { save, posts as getPosts } from "../../services/postService";

import Post from "./Post";
import InputOption from "../Common/InputOption";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";

import "./Feed.css";

const Feed = () => {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, [message]);

  const handlePostSend = (e) => {
    e.preventDefault();
    save(user, message);
    setMessage("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={handlePostSend}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={ArticleIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, body, likes, time, userPhoto, userName }) => (
          <Post
            key={id}
            name={userName}
            avatar={userPhoto}
            likes={likes}
            body={body}
            time={time}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
