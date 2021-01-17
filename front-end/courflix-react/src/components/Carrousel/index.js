import React from "react";
import SlickCarrousel from "./SlickCarrousel";



class Carrousel extends React.Component {
  
  render() {
    console.log(this.props.content)
    return (
      <div className="carrousel-wrapper">
        <SlickCarrousel content={this.props.content} />
      </div>
    );
  }
}

export default Carrousel