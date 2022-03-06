import { forwardRef } from "react";
import InputOption from "../Common/InputOption";

import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

import "./Post.css";

const Post = forwardRef(({ body, likes, time, avatar, name }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={avatar}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{time}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{body}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
