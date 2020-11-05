import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import "./prueba.css"

class Agregar extends React.Component {
  render (){
    return (
      <div className="prueba-wrapper">
        <Navbar />

        <div className="form-wrapper">
          <p input-title> Nombre</p>
          <input type="text" />
          <p input-title> Logo</p>
          <input type="text" />
          <p input-title> Descripción</p>
          <textarea></textarea>
          <p input-title> Web</p>
          <input type="url" />
          <p input-title> Twitter</p>
          <input type="text" />
          <p input-title> IG</p>
          <input type="text" />
        </div>
        <button className="add-button"> Agregar Startup</button>
        <Link to="/"> Home</Link>
        <Footer />
      </div>
    );
  }
}

export default Agregar