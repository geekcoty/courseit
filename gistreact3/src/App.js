import React from 'react';


class App extends React.Component {

constructor (props){
  super (props);
  this.state = {value: ""};
}


handleClick(){

}




  render (){
    return(
      <React.Fragment>

      <input type="text" name="firstNum"/>
      <input type="text" name="secondNum"/>
      <button name="showResult">Agregar</button>

      <div>
      <p> Result:</p>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
