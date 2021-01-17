import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import "./style.scss"

class NavBar extends React.Component {
 
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/courflixLogo.png"
              className="navbar-img"
              alt="logo de courflix"
            />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="link">
            <span className="navbar-item">Home</span>
          </Link>

          <Link to="/series/" className="link">
            <span className="navbar-item">Series</span>
          </Link>

          <Link to="/movies/" className="link">
            <span className="navbar-item">Movies</span>
          </Link>

          <Link to="/mylist/" className="link">
            <span className="navbar-item">My List</span>
          </Link>
        </div>
      </div>
    );
  }
}


export default NavBar;
