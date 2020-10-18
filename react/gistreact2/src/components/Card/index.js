import React from "react";
import "./style.css"
class Card extends React.Component {
  render (){
    const {img,title,description} = this.props.startup
    return (
      <React.Fragment>
      
      <img src= {img} />
      <p> {title} </p>
      <p> {description} </p>

      </React.Fragment>
    )
  }
}

export default Card;