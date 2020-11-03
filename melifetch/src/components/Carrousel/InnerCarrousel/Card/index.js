import React from "react";


class Card extends React.Component {

  render() {
    return (
      <div className="productos">
        <img src={this.props.product.thumbnail} alt="imagen del producto" />
        <p> Nombre: {this.props.product.title}</p>
        <p> Precio: {this.props.product.price}</p>
      </div>
    );
  }
}

export default Card;

