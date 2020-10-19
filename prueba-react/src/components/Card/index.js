import React from "react";
import "./style.css"

class Card extends React.Component {
  render (){
    return (
      <div>
        {this.props.item.title}
      </div>
    )
  }
}
export default Card;