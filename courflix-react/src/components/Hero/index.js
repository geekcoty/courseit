import React from "react";
import "./style.css"

class Hero extends React.Component {
  

  render() {
    console.log(this.props)
    const { name, rating, synopsis, year} = this.props.content;
    return (
      <div className="hero-wrapper" style={this.props.style}>
      <p className="name"> {name}</p>
      </div>
    );
  }
}

export default Hero;
