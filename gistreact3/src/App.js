import React from 'react';


class App extends React.Component {
constructor (props){
  super(props);
  
  this.state = {
   firstNum: 0,
   secondNum: 0,
   result:0
    }
}

handleSum(){
  const {firstInput, secondInput} = this.state
  this.setState({
    result : parseInt(firstInput) + parseInt(secondInput)
  })

}

handleChange(e){
  const{ name,value} = e.target
  this.setState ({
    [name]: value
  })
}





  render (){
    const {result} = this.state
    return(
      <React.Fragment>

      <input type="text" name="firstNum" onChange = {(e) => this.handleChange(e)}/>
      <input type="text" name="secondNum" onChange= {(e) => this.handleChange(e)}/>
      <button name="showResult" onClick={() => this.handleSum()}>Agregar</button>

      <div>
      <p> Result: {result}</p>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
