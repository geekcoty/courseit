import React from 'react';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import CardWrapper from "../src/components/CardWrapper"
import { Link } from "react-router-dom"
import "./App.css"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      inputValue:""
    }
  }
  handleCallback(inputValue){
    this.setState ({
      inputValue: inputValue
    })
  }
 render (){
  const { inputValue} = this.state

   return (
     <div className="app-wrapper">
       <Navbar handleCallback={(inputValue) =>this.handleCallback(inputValue)}/>
       <CardWrapper filter ={inputValue}/>
       <Link to="/agregar" className="link">  Agregar Startup</Link>
       <Footer/>
     </div>
   )
 }
}

export default App;
