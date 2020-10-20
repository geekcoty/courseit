import React from "react";
import "./style.css"

class Card extends React.Component {

  //iniciamos estado interno
  constructor(props) {
    super(props);

    this.state = {
      like: "no me gusta"
    };
  }

    //actualizamos el estado con una acción de un usuario (click del usuario)
   handleClick(){
    this.setState ({
      //propiedades a modificar
      like: "me gusta"
    })
   }

  render() {
    //lo mostramos con this.state.like
    return (
      <React.Fragment>
        <p>{this.state.like}</p>

        <button onClick = {() => this.handleClick()} > Darle like </button>

        <img src={this.props.item.img} />
        <p> Titulo : {this.props.item.title}</p>
        <p> Precio: {this.props.item.price}</p>
        <p> </p>
      </React.Fragment>
    );
  }
}
export default Card;