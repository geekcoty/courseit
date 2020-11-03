import React from "react";


class Card extends React.Component {

  render() {
    return (
      <div className="productos">
        <img src={this.props.item.thumbnail} alt="imagen del producto" />
        <p> Nombre: {this.props.item.title}</p>
        <p> Precio: {this.props.item.price}</p>
      </div>
    );
  }
}

export default Card;

