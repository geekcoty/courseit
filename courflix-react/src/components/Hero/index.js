import React from "react";
import "./style.css"

class Hero extends React.Component {
  

  render() {
    console.log(this.props);
    return (
      <div className="hero-wrapper" style={this.props.style}>
      </div>
    );
  }
}

export default Hero;
