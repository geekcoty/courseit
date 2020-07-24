import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


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

        <input type="text" name ="name" placeholder="Nombre" onChange = { (e) => this.handleChange (e)} />
        <input type="text" name="logo" placeholder="Logo" onChange={(e) => this.handleChange(e)}/>
        <input type="text" name="mail" placeholder="Correo Electronico" onChange={(e) => this.handleChange(e)}/>
        <input type="text" name="description" placeholder="Descripcion" onChange={(e) => this.handleChange(e)} />
        <input type="text" name="web" placeholder="Web" onChange={(e) => this.handleChange(e)}/>
        <input type="text" name="tuiter" placeholder="Twitter" onChange={(e) => this.handleChange(e)}/>
        <input type="text" name="ig" placeholder="Instagram" onChange={(e) => this.handleChange(e)}/>

        <button> Enviar </button> 
        <br/>
        

        <Link to ="/"> Volver a la home</Link>

        </React.Fragment>
  
    )
  }
}

export default Agregar