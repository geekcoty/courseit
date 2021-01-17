import React from 'react';
import Button from "./components/Button"
import './App.css';

//Gist 1
//Queremos crear una aplicacion que tenga un texto y un boton. 
//Al clickear el boton, el texto tiene que ponerse en color azul, al volver a clickearlo tiene que volver a negro.

class App extends React.Component{
  render (){
  return (
    <div className="App">
     
     <Button/>

    </div>
  );
}
}

export default App;
