import React from "react"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      result:0
    }
  }
  handleChange (e) {
    const {name, value} = e.target
    this.setState ({ [name] : value
    })
  }

  handleSum (){

    const {firstNum,secondNum} = this.state
    this.setState ({
      result: parseInt(firstNum) +parseInt(secondNum)
    })
  }
  render () {
  return (
    <div className="App">
      <input name= "firstNum" type="text" onChange = {(e) => this.handleChange(e)}/>
      <input name="secondNum" type="text" onChange = {(e) => this.handleChange(e)}/>

      <button onClick ={() => this.handleSum()}> sumar </button>

      <p> El resultado es : {this.state.result}</p>
  
    </div>
  )
  }
}

export default App;
