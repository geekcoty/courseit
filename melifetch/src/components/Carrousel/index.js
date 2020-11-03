import React from "react";
import InnerCarrousel from "./InnerCarrousel"

class Carrousel extends React.Component {
  render() {
    console.log(this.props.products)
    return (
    
        <div className="App">
          <h2> Products </h2>
          <InnerCarrousel products={this.props.products} />
        </div>
    );
  }
}

export default Carrousel;
