import React from "react"
import "../Navbar/style.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputvalue:""
    }
  }
  handleChange(e) {
   this.setState ({
   inputvalue: e.target.value
   })
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <span> Startup Argentina </span>
        <input
          type="text"
          className="input"
          placeholder="Buscar..."
          onChange={(e) => this.handleChange(e)}
        />
        <button className="button"> Agregar Startup</button>
      </div>
    );
  }
}

export default Navbar;