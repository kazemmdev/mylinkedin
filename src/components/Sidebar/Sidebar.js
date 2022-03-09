import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className="relative sm:sticky sm:top-16 flex-auto h-fit sm:w-2/5 md:w-1/3 lg:w-3/12">
      <div className="flex flex-col items-center justify-center bg-white rounded">
        <div className="w-full flex items-center flex-col mb-5">
          <Avatar
            src={user.photoURL}
            className="mt-9 mb-2"
            sx={{ width: 92, height: 92 }}
          >
            {user.email[0]}
          </Avatar>
          <h2 className="text-2xl">{user.displayName}</h2>
          <h4 className="text-md text-gray-400">{user.bio}</h4>
        </div>
        <div className="w-full border-t flex">
          <div className="flex-1">
            <div className="py-5 flex items-center flex-col justify-center">
              <p className="text-2xl font-medium">767</p>
              <p className="text-gray-400 text-sm">Connections</p>
            </div>
          </div>
          <div className="flex-1 border-l">
            <div className="py-5 flex items-center flex-col justify-center">
              <p className="text-2xl font-medium">60</p>
              <p className="text-gray-400 text-sm">Views</p>
            </div>
          </div>
        </div>
        <div className="w-full border-t">
          <div className="flex flex-col items-center justify-center py-5">
            <p className="text-xs text-gray-400 pt-3">
              Free access exclusive tools and insights
            </p>
            <div className="bg-blue-50 my-3 p-3 rounded-full cursor-pointer text-sm text-blue-500 hover:bg-blue-100 transition-all duration-300 ease-in">
              UPGRADE TO PREMIUM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
