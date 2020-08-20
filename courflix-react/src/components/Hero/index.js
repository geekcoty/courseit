import React from "react";
import "./style.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-wrapper">

        <div className="hero-title">
          <span> TITULO</span>
        </div>

        <div className="hero-details">
          <span> DETALLES </span>
        </div>
        <div className="hero-synopsis">
          <span> DESCRIPCIÓN </span>
        </div>

        <div className="hero-buttons">

          <button className="play-buttons"> HOLA</button>
          <button className="play-buttons"> HOLA </button>
          
        </div>
      </div>
    );
  }
}

export default Hero;
