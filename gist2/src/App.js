import React from "react"
import './App.css';

class App extends React.Component {
  handleChange (e) {
    return (
      console.log ("hola")
    )
  }
  render () {
  return (
    <div className="App">
      <input type="text" onChange = {(e) => this.handleChange(e)}/>
      <input type="text" />
      <button> sumar </button>
  
    </div>
  )
  }
}

export default App;
