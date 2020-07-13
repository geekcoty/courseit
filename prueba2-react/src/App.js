import React from 'react';


class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      catImage: null,
    }
  }
  async componentDidMount (){
    const getCat = await fetch("https://api.thecatapi.com/v1/images/search");
    const getCatJson = await getCat.json();

    console.log (getCatJson);

    this.setState ({
      catImage: getCatJson[0].url
    })
  }
    

render (){

 return (
  <React.Fragment>

<p> DATO MUY MUY IMPORTATE </p>
{this.state.catImage ? (<img src={this.state.catImage}/>) : ( <p> Cargando </p>)}

  </React.Fragment>
 )
}
}
export default App;
