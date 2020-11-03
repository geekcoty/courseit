import React from "react";
import Carrousel from "./components/Carrousel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      inputValue: "",
    };
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  async handleClick() {
    const searchValue = this.state.inputValue;
    const getCarouselData = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=5`
    );
    const getCarouselDataJson = await getCarouselData.json();

    console.log(getCarouselDataJson);

    this.setState({
      products: getCarouselDataJson.results,
    });
  }

  render() {
    return (
      <div>
  
        <Carrousel
          title={this.state.inputValue}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;
