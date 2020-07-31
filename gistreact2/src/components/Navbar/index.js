import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
handleChange(e) {
  const inputValue = e.target.value;
  const { getData } = this.props;

  getData (inputValue);
}


  render (){
  
    return (
 
      <React.Fragment>
        <nav> 
          <h1> Startup argentina </h1>
          
            <input onChange={(e) => this.handleChange(e)} type="text"
              placeholder="Buscar Startup" />

          <button> Buscar Startups </button>

          <Link to="/agregar">Agregar Startup</Link>
          

        
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;

