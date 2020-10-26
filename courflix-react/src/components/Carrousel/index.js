import React from "react";
import SlickCarrousel from "./SlickCarrousel";
import Title from "../Carrousel/Title";
import "./style.scss";



class Carrousel extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="carrousel-wrapper">
        <Title title={this.props.title}/>
        <SlickCarrousel pelis={this.props.pelis}/>
      </div>
    );
  }
}

export default Carrousel