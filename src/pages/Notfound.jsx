import React from "react";
import { Link } from "react-router";

const Notfound = () => {
  return (
    <div>
      <h2>
        Not Found, Pleae go &nbsp;
        <Link to="/" className="link link-success">
          Home
        </Link>
      </h2>
    </div>
  );
};

export default Notfound;
