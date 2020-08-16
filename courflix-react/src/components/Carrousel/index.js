import React from "react";
import SlickCarrousel from "./SlickCarrousel";
import "./style.scss";


class Carrousel extends React.Component {
  render() {
    return (
      <div className="carrousel-wrapper">
        <p> SOY EL CARROUSEL</p>
        <SlickCarrousel />
        <SlickCarrousel />
        <SlickCarrousel />
      </div>
    );
  }
}

export default Carrousel