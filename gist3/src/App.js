import React from 'react';
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import CardWrapper from "../src/components/CardWrapper"

import "./App.css"

// Gist 3: Recrear la imagen de Cards.jpg
class App extends React.Component {
 render (){


   return (
     <div>
       <Navbar/>
       <CardWrapper/>
       <Footer/>
     </div>
   )
 }
}

export default App;
