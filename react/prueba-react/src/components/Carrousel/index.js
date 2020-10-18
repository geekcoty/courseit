import React from "react";
import Title from "../Title";
import InnerCarrousel from "../InnerCarrousel";
import "./styles.css";

class Carrousel extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Title content={this.props.title} />
        <InnerCarrousel items={this.props.items} />
      </React.Fragment>
  
    )
  }
}

export default Carrousel;