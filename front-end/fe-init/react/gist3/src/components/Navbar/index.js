import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      inputvalue:""
    }
  }
  handleChange(e) {
    const inputvalue =e.target.value;
    const {handleCallback} = this.props;


  handleCallback(inputvalue);
  }
  render() {
    const {showAutocomplete} = this.props;
        return (
      <div className="navbar-wrapper">
        <Link to="/" className="link">
          <span> Startup Argentina </span>
        </Link>
         {showAutocomplete && (
        <input
          type="text"
          className="input"
          placeholder="Buscar..."
          onChange={(e) => this.handleChange(e)}
           />
         )
  }
        <Link to="/agregar">
          <button className="button"> Agregar Startup</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;