import React from "react"
import Navbar from "./components/Navbar"
import Carrousel from "./components/Carrousel"


class App extends  React.Component {
    constructor(props) {
    super(props);
    this.state = {
     infoMeli: []

  }
}
  async componentDidMount () {

    const meliFetch = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=BUSQUEDA&limit=4"
    );

    const meliFetchResults = await meliFetch.json();
  
    this.setState =({
    infoMeli: meliFetchResults.results
    })
  }
  render () {
  return (
    <div className="App">
      <Navbar />
      <Carrousel  items={this.state.infoMeli}/>
    </div>
  );
}
}

export default App;
