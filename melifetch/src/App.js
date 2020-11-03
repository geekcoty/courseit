import React from "react"
import Navbar from "./components/Navbar"
import Carrousel from "./components/Carrousel"


class App extends  React.Component {
    constructor(props) {
    super(props);
    this.state = {
     products: []
  }
}
  async componentDidMount() {
  

    const meliFetch = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=BUSQUEDA&limit=4"
    );

    const meliFetchResults = await meliFetch.json();
      
this.setState({
  products: meliFetchResults.results
})
  }
  render () {
  
    //thumbnail
    //title
    //price
    return (
      <div className="App">
        <Navbar />
        <Carrousel products={this.state.products} />
      </div>
    );
  }
}

export default App;
