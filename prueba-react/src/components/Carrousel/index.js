import React from "react";
import Title from "../Title";
import InnerCarrousel from "../InnerCarrousel";
import "./style.css";

class Carrousel extends React.Component {
  render (){
    //Para pasar props:
    // al compente Title le paso {this.props.NOMBREDELATRIBUTO}
 return (
   <div className="wrapper">
   <Title title={this.props.title}/>
   <InnerCarrousel items={this.props.items}/>
   </div> 
 )
  }
}

export default Carrousel;