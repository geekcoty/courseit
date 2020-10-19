import React from "react";
import Title from "../Title";
import InnerCarrousel from "../InnerCarrousel";
import "./style.css";

class Carrousel extends React.Component {
  render () {
    console.log(this.props)
 return (
   <div className="wrapper">
   <Title />
   <InnerCarrousel />
   </div> 
 )
  }
}

export default Carrousel;