import React from "react"
class App extends React.Component {
  constructor(props) {
    super(props);
console.log ("soy un constructor")
  }
  componentDidMount() {
    console.log("soy un componentDidMount")
  }
  
  render () {
    console.log("soy un render")
  return (
    <div className="App">
     <p> Hola </p>
     <p> Chau </p>
    </div>
  );
  }
}

export default App;
