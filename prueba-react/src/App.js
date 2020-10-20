import React from 'react';
import Carrousel from "./components/Carrousel";

class App extends React.Component {

  render (){
    const items = [
      {
        img:"https://bit.ly/34fbjwP",
        title: "Cat",
        price: "US$0.00"
      },
      {
        img:"https://bit.ly/34fbjwP",
        title: "Cat",
        price: "US$0.00",
      }
    ];
    // Para pasar props:
    // Al componente Carrousel le pongo el nombre del atributo (title) y le paso el valor ("Ofertas")
    
  return (
    <div className="carr-wrapper">
    
      <Carrousel title="Basado en tu ultima visita" items ={items}/>

    </div>
  );
}
}

export default App;
