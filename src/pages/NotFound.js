import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>
        Are you lost?{" "}
        <Link className="notfound__redirectLink" to="/">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
