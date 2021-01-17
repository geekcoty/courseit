import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";

import data from "./data/courflix.json"

import "./App.scss";

class App extends React.Component {
 
  render() {
    return (
      <div className="app-wrapper">
        <Navbar />
        <Hero
          homeHero={data[0].series[15]}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data[0].series[15].cover})`,
            backgrounPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Carrousel content={data} title="Series"/>
   
        <Footer />
      </div>
    );
  }
}

export default App;
