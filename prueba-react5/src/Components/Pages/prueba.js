import React from "react";
import { Link } from "react-router-dom";

class Prueba extends React.Component {
  render(){
    return (
      <React.Fragment>
        <p> hola </p>

      <Link to = "/"> Ir  a la home</Link>
      </React.Fragment>
    )
  }
}

export default Prueba