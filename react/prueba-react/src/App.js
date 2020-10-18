import React from 'react';
import Carrousel from "./components/Carrousel";

class App extends React.Component{
render () {
 const items=[
    {
      img: "https://courseit.com.ar/static/logo.png",
      title: "Primer Producto",
      price: 20000,
    },
      {
      img: "https://courseit.com.ar/static/logo.png",
      title: "Segundo Producto",
      price: 20000,
    },
      {
      img: "https://courseit.com.ar/static/logo.png",
      title: "Tercer Producto",
      price: 20000,
    },
       {
      img: "https://courseit.com.ar/static/logo.png",
      title: "Cuarto Producto",
      price: 20000,
    }
  ]
   return (
    <React.Fragment>
      <Carrousel title="Carrousel 1" items={items}/>
      <Carrousel title="Carrousel 2" items={items}/>
    

   </React.Fragment> 
  );

}
}


export default App;
