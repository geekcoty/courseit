import React from 'react';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import CardWrapper from "../src/components/CardWrapper"

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
     <div>
       <Navbar handleCallback={(inputValue) =>this.handleCallback(inputValue)}/>
       <CardWrapper filter ={inputValue}/>
       <Footer/>
     </div>
   )
 }
}

export default App;
