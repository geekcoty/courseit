import React from "react"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catPic: "",
    };
  }

  async componentDidMount() {
    const getCat = await fetch(" https://api.thecatapi.com/v1/images/search");
    const getCatJson = await getCat.json();

    this.setState({
      catPic: getCatJson[0].url
    });
  }
  render() {
    return (
      <div className="App">
        <p> DATO MUY IMPORTANTE</p>
        {this.state.catPic ? (
        <img src={this.state.catPic} alt="gatite" />
        ) : (
          <p> Cargando</p>
        )}

        {!this.state.catPic && (
          <p> No hay ninguna imagen de gato </p>
        )}
      </div>
    );
  }
}

export default App;
