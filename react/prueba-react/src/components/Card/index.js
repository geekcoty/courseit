import React from "react";
import "./styles.css";


class Card extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      like:"no me gusta"
    }
  }
  handleClick(){
    if (this.state.like =="me gusta") {
      this.setState({
        like: "no me gusta"
      })
    } else { 
    this.setState({
      like: "me gusta"
    })
    }
  }

  render(){
    return (
      <div>
      <p> {this.state.like}</p>
      <button onClick={ ()=> this.handleClick() }> Darle like </button>
      <img src={this.props.items.img} />
      <p> Titulo: {this.props.items.title}</p>
      <p> Precio: {this.props.items.price}</p>
      </div>
    )
  }
}

export default Card;