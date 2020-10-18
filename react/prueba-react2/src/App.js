import React from 'react';

class App extends React.Component{
constructor (props){
  super (props);

  this.state = {
    catImage: ""
  }
}

async componentDidMount (){
  const getCat = await fetch ( "https://api.thecatapi.com/v1/images/search" );
  const getCatJSON = await  getCat.json();

  this.setState({
    catImage: getCatJSON[0].url
  }) 
}

render (){
  return (
    <img src={this.state.catImage} />
  )
}
}
export default App;
