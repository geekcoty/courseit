import React from "react";
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import courflixLogo from "../../assets/logo.png"

import "./style.scss"

class Navbar extends React.Component {
   render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={courflixLogo}
              className="navbar-img"
              alt="logo de courflix"
            />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="link">
            <span className="navbar-item">Home</span>
          </Link>

          <HashLink smooth to="/#series" className="link">
            <span className="navbar-item">Series</span>
          </HashLink>

          <HashLink smooth to="/#movies" className="link">
            <span className="navbar-item">Movies</span>
          </HashLink>

          <HashLink smooth to="#mylist" className="link">
            <span className="navbar-item">My List</span>
          </HashLink>
        </div>
      </div>
    );
  }
}

export default Navbar
