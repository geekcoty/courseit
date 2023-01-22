import React from "react";
import "./logo.scss";
import { Link } from "react-router-dom";
import courflixLogo from "../../../assets/logo.png"

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">
          <img
            src={courflixLogo}
            className="navbarImg"
            alt="logo de courflix"
          />
        </Link>
      </div>
    );
  }
}

export default Logo;
