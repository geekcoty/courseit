import React from 'react';
import Carrousel from "./components/Carrousel";

class App extends React.Component {
  render (){
  return (
    <div className="carr-wrapper">
      <Carrousel/>
      <Carrousel/>
    </div>
  );
}
}

export default App;
