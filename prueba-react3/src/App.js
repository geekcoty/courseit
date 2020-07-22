import React from 'react'
import Carrousel from "./Components/Carrousel"

class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      products: [],
      inputValue: ""
    }
  }

   handleChange(e){
     this.setState ({
       inputValue: e.target.value
     })
     }
  
 async handleClick (){
    const searchValue = this.state.inputValue
    const getCarrouselData = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=5`)
    const getCarrouselDataJSON = await getCarrouselData.json ();

    this.setState ({
    products: getCarrouselDataJSON.results})
  }

  render () {
      return (

        <React.Fragment>
          <input type="text" onChange = { (e) => this.handleChange (e)}/> 
          <button onClick = {() => this.handleClick()}> Buscar </button>
          <Carrousel products= {this.state.products} title= {this.state.inputValue} />

        </React.Fragment>

  )
  }
}

export default App;
