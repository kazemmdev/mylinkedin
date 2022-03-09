import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center mx-auto px-10 top-4">
      <h1 style={{ fontSize: "200px" }} className="text-9xl font-normal">
        404
      </h1>
      <p className="text-gray-400 text-xl pt-5">
        Are you lost?{" "}
        <Link className="pl-2 text-blue-400 hover:text-blue-500" to="/">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
