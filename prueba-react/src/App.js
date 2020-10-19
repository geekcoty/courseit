import React from 'react';
import Carrousel from "./components/Carrousel";

class App extends React.Component {
  render (){
  return (
    <div className="carr-wrapper">
      <Carrousel title="Basado en tu ultima visita"/>
      <Carrousel title ="Ofertas"/>
    </div>
  );
}
}

export default App;
