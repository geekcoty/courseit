import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./navbar.scss"

class Menu extends React.Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  
  render() {
    const { toggle } = this.state;
    return (
      <React.Fragment>
        <ul className={toggle ? "toggle" : ""}>
          <li className="item">
            <HashLink smooth to="/#series" className="link">
              <span>Series</span>
            </HashLink>
          </li>
          <li className="item">
            <HashLink smooth to="/#movies" className="link">
              <span>Movies</span>
            </HashLink>
          </li>
          <HashLink smooth to="#mylist" className="link">
            <span>My List</span>
          </HashLink>
          <li className="item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="close" onClick={this.menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={this.menuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </React.Fragment>
    );
  }
}
export default Menu;
