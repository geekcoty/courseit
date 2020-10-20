import React from "react";
import SlickCarrousel from "./SlickCarrousel";
import "./style.scss";
import courflix from "../../data/courflix.json"


class Carrousel extends React.Component {

  
  render() {
    return (
      <div className="carrousel-wrapper">
        <SlickCarrousel/>
        <SlickCarrousel />
        <SlickCarrousel />
      </div>
    );
  }
}

export default Carrousel