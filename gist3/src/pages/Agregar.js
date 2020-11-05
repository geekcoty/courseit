import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import "./prueba.css"

class Agregar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title:"",
        logo:"",
        mail:"",
        desc:"",
        url:"",
        twitter: "",
        ig:"",
        estOK:""
      }
    }
    handleChange(e) {
      const {name, value} = e.target;

      this.setState ({
        [name] : value //claves dinamicas
    })
  }

  handleClick(){
    const {title, logo,desc, mail} = this.state;
    if (title && mail && logo && desc) {
       this.setState({
         estaOk: true,
       });
    } else {
       this.setState({
         estaOk: false,
       });
  }

}
 render () {
   return (
     <div className="prueba-wrapper">
       <Navbar />
       <div className="form-wrapper">
         <p>
           {this.state.estaOk ? ("Campos completados") : ("Campos incompletos")}
         </p>
         <p className="input-name"> Nombre</p>
         <input
           type="text"
           name="title"
           onChange={(e) => this.handleChange(e)}
         />

         <p className="input-logo">Logo </p>
         <input
           type="text"
           name="logo"
           onChange={(e) => this.handleChange(e)}
         />

         <p className="input-desc"> Descripción</p>
         <input
           type="text"
           name="desc"
           onChange={(e) => this.handleChange(e)}
         />
         <p className="input-mail"> E-mail</p>
         <input
           type="text"
           name="mail"
           onChange={(e) => this.handleChange(e)}
         />
         <p className="input-url"> Web</p>
         <input type="url" name="url" onChange={(e) => this.handleChange(e)} />

         <p className="input-twitter"> Twitter</p>
         <input
           type="text"
           name="twitter"
           onChange={(e) => this.handleChange(e)}
         />

         <p className="input-ig"> IG</p>
         <input type="text" name="ig" onChange={(e) => this.handleChange(e)} />
       </div>
       <button className="add-button" onClick={() => this.handleClick()}>
         {" "}
         Agregar Startup
       </button>

       <Link to="/"> Home</Link>

       <Footer />
     </div>
   );
}
}
export default Agregar;