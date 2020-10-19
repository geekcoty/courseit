import React from "react";
import Card from "../Card";
import "./style.css"


class InnerCarrousel extends  React.Component {
  render(){
   return (
     <div className="card-wrapper">
     <Card />
     <Card />
     <Card />
     <Card />
     </div>
   )
  }
}

export default InnerCarrousel;