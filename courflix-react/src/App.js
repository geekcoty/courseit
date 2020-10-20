import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";
import courflix from "./data/courflix.json";

import "./App.scss";

class App extends React.Component {
  render() {
    console.log(courflix);
    return (
      <div className="app-wrapper">
        <Navbar />
        <Hero
          content={courflix[0].series[15]}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${courflix[0].series[15].cover})`,
            backgrounPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Carrousel/>
        <Footer />
      </div>
    );
  }
}

export default App;
