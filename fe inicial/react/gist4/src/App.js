import React from "react"
import './App.css';

class App extends React.Component{
  //fuente de información
  constructor(props) {
    super(props);
    this.state = { 
      inputValue: "",
      tasks: []
    }
  }

  // a medida que escribe, se actualiza el valor
handleChange(e) {
this.setState ({
  inputValue: e.target.value 
})
}
// agrego el valor de newTask al hacer click

handleClick() {
const newTask = this.state.inputValue;
const task = this.state.task;

task.push(newTask);

this.setState({
  task: task,
});
}
 handleClick() { // <- Aca queremos leer la informacion
    //Leemos la propiedad inputValue de nuestro estado
    const newValue = this.state.inputValue
    
    //Leer la propiedad tasks de nuestro estado
    const newTasks = this.state.tasks

    //Agregarle a ese array un nuevo item con el valor de inputValue
    newTasks.push(newValue)

    //Actualizar el estado tasks con el nuevo array
    this.setState({
      tasks: newTasks,
      inputValue: ''
    })
  }

render () {
  //mostrar la lista de tasks

  return (
    <div className="App">
      <input value = {this.state.inputValue} type="text" onChange={(e) => this.handleChange(e)} />
      <button onClick={() => this.handleClick()}>Add</button>
    <ul>
      {this.state.tasks.map((task, key) => {
        return (
          <li key = {key}> {task}</li>
        )
      })
      }
    </ul>
    </div>
  );
}
}
export default App;
