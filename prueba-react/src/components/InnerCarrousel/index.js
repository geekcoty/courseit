import React from "react";
import Card from "../Card";
import "./style.css"


class InnerCarrousel extends  React.Component {
  render(){
   return (
     <div className="card-wrapper">
       <Card item={this.props.items[0]} />
       <Card item={this.props.items[1]} />
       <Card item={this.props.items[2]} />
       <Card item={this.props.items[3]} />
     </div>
   );
  }
}

export default InnerCarrousel;