import { forwardRef } from "react";
import { Avatar } from "@mui/material";
import { ReactComponent as LikeSvg } from "../../assets/like.svg";
import { ReactComponent as CommentSvg } from "../../assets/message.svg";
import { ReactComponent as ShareSvg } from "../../assets/share.svg";

const Post = forwardRef(({ body, likes, time, avatar, name }, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col p-5 mb-4 items-center justify-center bg-white rounded"
    >
      <div className="w-full flex space-x-4 items-center">
        <Avatar src={avatar}>{name[0]}</Avatar>
        <div>
          <h2 className="text-sm font-medium">{name}</h2>
          <p className="text-xs text-gray-400 p-0">{time}</p>
        </div>
      </div>
      <div className="w-full pt-5">
        <p>{body}</p>
      </div>
      <div className="w-full flex items-center mt-4 space-x-6">
        <div className="group flex space-x-2 items-center">
          <LikeSvg className="stroke-gray-400 group-hover:stroke-red-500 items-center cursor-pointer" />
          <span className="text-gray-400">5</span>
        </div>
        <div className="group flex space-x-2">
          <CommentSvg className="stroke-gray-400 group-hover:stroke-blue-500 items-center cursor-pointer" />
          <span className="text-gray-400">12</span>
        </div>
        <div className="group flex space-x-2">
          <ShareSvg className="fill-gray-400 group-hover:fill-blue-500 items-center cursor-pointer" />
        </div>
      </div>
    </div>
  );
});

export default Post;
