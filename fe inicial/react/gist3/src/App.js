import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardWrapper from "./components/CardWrapper"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleCallback(inputValue) {
    this.setState({
      inputValue: inputValue,
    });
  }
  render() {
    const { inputValue } = this.state;

    return (
      <div className="app-wrapper">
        <Navbar
          showAutocomplete={true}
          handleCallback={(inputValue) => this.handleCallback(inputValue)}
        />
        <CardWrapper filter={inputValue} />
        <Footer />
      </div>
    );
  }
}

export default App;
