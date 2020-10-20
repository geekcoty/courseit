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

    //actualizamos el estado con una acción de un usuario (click del usuario) con la funcion
    // this.setState({
    // saraza: "valor de saraza"})
    
   handleClick(){
      //propiedades a modificar con una condición
      if (this.state.like ==="me gusta") {
        this.setState ({
          like: "no me gusta"
        }) 
      } else {
        this.setState ({
          like: "me gusta"
        })
      }

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