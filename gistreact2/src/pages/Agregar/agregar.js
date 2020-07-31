import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./style.css"


class Agregar extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      name: " ",
      logo: " ",
      mail: " ",
      description: " ",
      web: " ",
      tuiter: " ",
      ig: " "
    }
  }

  handleChange (e) {
    const {name, value} = e.target;
  
    this.setState ({

   [name]: value

    });

  }

  render ()  {
  

    return (
      <React.Fragment>
        <Navbar />
        <div className="form-wrapper">
          <p className="form-title"> Name :</p>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Logo :</p>
          <input
            className="form-input"
            type="text"
            name="logo"
            placeholder="Logo"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Correo Electrónico:</p>
          <input
            className="form-input"
            type="text"
            name="mail"
            placeholder="Correo Electronico"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Descripción: </p>
          <input
            className="form-input"
            type="text"
            name="description"
            placeholder="Descripcion"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Sitio Web: </p>
          <input
            className="form-input"
            type="text"
            name="web"
            placeholder="Web"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Twitter: </p>
          <input
            className="form-input"
            type="text"
            name="tuiter"
            placeholder="Twitter"
            onChange={(e) => this.handleChange(e)}
          />
          <p className="form-title"> Instagram:</p>
          <input
            className="form-input"
            type="text"
            name="ig"
            placeholder="Instagram"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button className="form-button"> Enviar </button>
        </div>

        <Link  className= "form-link" to="/"> Volver a la home</Link>
      </React.Fragment>
    );
  }
}

export default Agregar