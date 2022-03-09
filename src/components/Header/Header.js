import { useNavigate } from "react-router-dom";
import HeaderOption from "./HeaderOption";
import NavOption from "./NavOption";

import Logo from "../../assets/linkedin.svg";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import { ReactComponent as HomeSvg } from "../../assets/home.svg";
import { ReactComponent as NetworkSvg } from "../../assets/network.svg";
import { ReactComponent as MessageSvg } from "../../assets/message.svg";
import { ReactComponent as NotificationSvg } from "../../assets/notification.svg";
import { ReactComponent as JobSvg } from "../../assets/job.svg";
import { ReactComponent as WorkSvg } from "../../assets/work.svg";

function Header({ isHome = true }) {
  const navigator = useNavigate();
  return (
    <div className="sticky top-0 z-20 inset-x-0 backdrop-blur-lg w-full border-b border-slate-900/10">
      <div className="flex max-w-6xl mx-auto justify-between px-4 py-2 items-center">
        <div className="flex min-w-fit items-center">
          <a className="contents" href="/">
            <img className="object-cover h-9 w-9" src={Logo} alt="" />
          </a>
          <div className="hidden group overflow-hidden ml-4 md:flex h-9 px-2 rounded items-center space-x-1 text-gray-600 hover:bg-white transition-all duration-300 ease-in-out">
            <SearchSvg className="h-10 stroke-gray-300 group-hover:stroke-blue-500 transition-all duration-300 ease-in-out" />
            <input
              className="group outline-none w-full h-9 border-0 bg-transparent"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex w-full ml-5">
          <HeaderOption
            Icon={HomeSvg}
            title="Home"
            active={isHome}
            onClick={() => navigator("/")}
          />
          <HeaderOption Icon={NetworkSvg} title="My Network" />
          <HeaderOption Icon={MessageSvg} title="Messageing" />
          <HeaderOption Icon={NotificationSvg} title="Notifications" />
          <HeaderOption Icon={JobSvg} title="Jobs" />
          <HeaderOption Icon={WorkSvg} title="Work" />
          <NavOption />
        </div>
      </div>
    </div>
  );
}

export default Header;
