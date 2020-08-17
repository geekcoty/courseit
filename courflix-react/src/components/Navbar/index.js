import React from "react";
import "./style.scss";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src="./courflixLogo.png" className="navbar-img" alt="logo de courflix" />
        </div>
        <div className="navbar-menu">
          <span className="navbar-item">Inicio</span>
          <span className="navbar-item">Series</span>
          <span className="navbar-item">Peliculas</span>
          <span className="navbar-item">Agregados recientemente</span>
          <span className="navbar-item">Mi lista</span>
        </div>
      </div>
    );
  }
}

export default NavBar;
