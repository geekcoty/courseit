import React from "react";
import {Link} from "react-router-dom"
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HashLink } from 'react-router-hash-link';

import courflixLogo from "../../assets/logo.png"

import "./style.scss"

class Navbar extends React.Component {
   state = {
    toggle: true,
  };

  handleToggle(){
    if (this.state.toggle === true) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
    }
  
   render() {
    const {toggle} = this.state
    return (
      <div className="navbar-wrapper">
        <div className="navbar-responsive">
          <FontAwesomeIcon icon= {faBars} onClick={() => this.handleToggle()}/>
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={courflixLogo}
              className="navbar-img"
              alt="logo de courflix"
            />
          </Link>
        </div>
        <div className="toggle">
            <div className={toggle ? "toggle" : ""}>   
              <li><Link to="/" className="link navbaresp-item">
          <span>Home</span>
          </Link> </li>
              <li> <HashLink smooth to="/#series" className="link navbaresp-item">
            <span>Series</span>
          </HashLink></li>
              <li><HashLink smooth to="/#movies" className="link navbaresp-item">
            <span>Movies</span>
          </HashLink></li>
              <li> <HashLink smooth to="#mylist" className="link navbaresp-item">
            <span>My List</span>
          </HashLink></li>
            </div>
          </div>
        <div className="navbar-menu">
        
        

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
