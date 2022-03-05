import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import firebase from "firebase/compat/app";

import { db } from "../../services/firebaseService";
import { selectUser } from "../../store/slices/userSlice";

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
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const handlePostSend = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
