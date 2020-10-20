import React from "react";
import "./style.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
      console.log("soy el innercarrousel");
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.props.item.img} />
        <p> Titulo : {this.props.item.title}</p>
        <p> Precio: {this.props.item.price}</p>
        <p> </p>
      </React.Fragment>
    );
  }
}
export default Card;