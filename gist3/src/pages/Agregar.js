import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import "./prueba.css"

class Agregar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name:"",
        logo:"",
        desc:"",
        url:"",
        twitter: "",
        ig:""
      }
    }

 render () {
   return (
     <div className="prueba-wrapper">
       <Navbar />
       <div className="form-wrapper">
         <p className="input-name"> Nombre</p>
         <input type="text" name="name" />

         <p className="input-logo">Logo </p>
         <input type="text" name="logo" />

         <p className="input-desc"> Descripción</p>
         <input type="text" name="desc" />

         <p className="input-url"> Web</p>
         <input type="url" name="url" />

         <p className="input-twitter"> Twitter</p>
         <input type="text" name="twitter" />

         <p className="input-ig"> IG</p>
         <input type="text" name="ig" />
       </div>
       <button className="add-button"> Agregar Startup</button>

       <Link to="/"> Home</Link>

       <Footer />
     </div>
   );
}
}
export default Agregar;