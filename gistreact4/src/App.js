import React from 'react';


class App extends React.Component {

constructor (props){
super(props);
this.state = {
  inputValue: "", // CREACIÓN FUENTE DE INFORMACIÓN
  tasks: []
} 
}

handleChange(e){

  this.setState({
    inputValue: e.target.value // ACTUALIZACIÓN DE FUENTE DE INFORMACIÓN
  })
}


handleClick(){
const newValue= this.state.inputValue// OBTENCION INFORMACIÓN ACTUALIZADA

const newTasks = this.state.tasks

newTasks.push(newValue)

this.setState({
    tasks: newTasks,
    inputValue:""
  })
}
  render (){
    return(
      <React.Fragment>
      <input value={this.state.inputValue} onChange = { (e) => this.handleChange(e)}type="text"/> 
      <button onClick = { (e) => this.handleClick()}>Agregar</button>

      {

        this.state.tasks.map((val) => {
          return(
            <li> {val} </li>
          )
        })

      }
      </React.Fragment>
    )
  }
}

export default App;
