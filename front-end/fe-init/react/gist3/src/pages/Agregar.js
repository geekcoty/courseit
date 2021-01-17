import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
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
        estaOk:"",
        showMessage:""
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
    const isValid = title && mail && logo && desc ? true : false;

    if (isValid) {
     
      //1. leer la clave startups de LS
      const oldStartups = localStorage.getItem("startups");

      //2. agregar nuestra nueva startup a lo que leimos
     if (oldStartups) {
       const parsedOldStartups = JSON.parse(oldStartups);
       parsedOldStartups.push({
         title,
         mail,
         logo,
         desc,
       });

       //3.guardar el nuevo valor en el LS
           const newStartups = JSON.stringify(parsedOldStartups);
        localStorage.setItem("startups", newStartups); // Este es el paso 3
      } else {
        const startups = [];
        startups.push({
          title,
          mail,
          logo,
          desc
        });

        const startupsToString = JSON.stringify(startups);
        localStorage.setItem("startups", startupsToString);
      }
    }
       this.setState({
         estaOk: true,
         showMessage: true,
       });
    } 
  

 render () {
   return (
     <div className="prueba-wrapper">
       <Navbar />
       <div className="form-wrapper">
        
           {this.state.showMessage &&  <p>
           {this.state.estaOk ? ("Campos completados") : ("Campos incompletos")}</p>
 }
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
         Agregar Startup
       </button>

  

       <Footer />
     </div>
   );
}
}
export default Agregar;