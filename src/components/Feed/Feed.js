import FlipMove from "react-flip-move";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { save, posts as getPosts } from "../../services/postService";

import Post from "./Post";

import { ReactComponent as ArticleSvg } from "../../assets/article.svg";
import { ReactComponent as ImageSvg } from "../../assets/image.svg";
import { ReactComponent as VideoSvg } from "../../assets/video.svg";
import { ReactComponent as SendSvg } from "../../assets/send.svg";

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
    <div className="flex-auto sm:mt-0 mt-4 sm:w-3/5 md:w-2/3 lg:w-6/12">
      <div className="flex flex-col items-center justify-center mb-4 bg-white rounded">
        <form className="w-full" onSubmit={handlePostSend}>
          <div className="border-b">
            <input
              type="text"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="border-none outline-none p-7"
              placeholder="Write here for visual impact."
            />
          </div>
          <div className="flex items-center justify-between my-4">
            <div className="flex space-x-6 px-5 py-2">
              <div className="flex items-center space-x-1 text-gray-400">
                <ArticleSvg className="stroke-gray-400 h-7 w-7 object-contain" />
                <span className="hidden sm:block">Article</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <ImageSvg className="stroke-gray-400 h-7 w-7 object-contain" />
                <span className="hidden sm:block">Image</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <VideoSvg className="stroke-gray-400 h-7 w-7 object-contain" />
                <span className="hidden sm:block">Video</span>
              </div>
            </div>
            <div>
              <button className="block pr-6" type="submit">
                <SendSvg className="stroke-blue-500 h-7 w-7 object-contain" />
              </button>
            </div>
          </div>
        </form>
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
