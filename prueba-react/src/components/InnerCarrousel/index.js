import React from "react";
import Card from "../Card";
import "./style.css"


class InnerCarrousel extends React.Component {
  constructor(props) {
    super(props);
    console.log("soy el innercarrousel");
    this.state = {
    };
  }
  render() {
    //Para hacer un .map sobre los componentes
    // - NOMBRE DEL ARRAY : {this.props.items
    // - ABRO EL MAP: .map ((parametroRandom, key) => {
    //  return (
    //   <Componente item = {parametroRandom} key={key}
    //   )})}
    // - El segundo parametro "key" va por defecto porque lo pide react
    // Para destructurar objetos:
    const { items } = this.props;
    return (
      <div className="card-wrapper">
        {items.map((item, key) => {
          return <Card key={key} item={item} />;
        })}
      </div>
    );
  }
}

export default InnerCarrousel;