import React from "react";
import "./style.css";
import InnerCarrousel from "./InnerCarrousel";

class Carrousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      products: [],
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick() {}

  render() {
    return (
      <div>
        <h1 className="main-title">{this.props.title}</h1>
        <div className="input-container">
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            className="input"
            placeholder="Ingresá tu búsqueda"
          />
          <button onClick={() => this.handleClick()}>Buscar</button>
        </div>
        <InnerCarrousel
          inputValue={this.state.inputValue}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default Carrousel;
