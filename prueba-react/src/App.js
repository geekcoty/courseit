import React from 'react';
import Carrousel from "./components/Carrousel";
import './App.css';

class App extends React.Component {
  render (){
  return (

    <div className="carr-wrapper">
      <Carrousel  title="Basado en tu ultima visita"/>
      <Carrousel Secondtitle="Ofertas" />
    </div>
  );
}
}

export default App;
