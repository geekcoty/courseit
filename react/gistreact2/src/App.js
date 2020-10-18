import React from 'react';
import Navbar from "./components/Navbar";
import CardWrapper from "./components/CardWrapper";
import Credit from "./components/Credit";

class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      inputValue: ""
    }
  }

handleData (inputValue) {
this.setState ({
  inputValue: inputValue
})
}


componentDidMount (){
 const persontoString = localStorage.getItem("persontoString");
 const person = JSON.parse(persontoString);
 console.log(person);

}

  render (){ 

    const { inputValue } = this.state 
        
  return (
<React.Fragment>
  <Navbar getData = { ( inputValue)  => this.handleData ( inputValue )} />
  <CardWrapper filter = { inputValue } />
  <Credit />

</React.Fragment>  
  );
  }
}

export default App;
