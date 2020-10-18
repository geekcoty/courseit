import React from 'react';
import Autocomplete from "./Components/Autocomplete"


class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      autocompleteValue: ""
    }
  }
handleCallback (inputValue){


  this.setState({
    autocompleteValue: inputValue
  })
}
  render (){
    return (
    <React.Fragment>
      <Autocomplete handleCallback = { (inputValue) => this.handleCallback (inputValue)} />
     <p>Tu autocomplete dice: {this.state.autocompleteValue} </p>
    </React.Fragment>
  );
  }

}

export default App;
