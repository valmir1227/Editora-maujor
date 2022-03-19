import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">
        <span>Editora MoujorTec</span>
      </h1>
    </Link>
  );
};
export default Logo;
