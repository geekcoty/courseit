import React from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";

import "./App.scss";

class App  extends React.Component {
render () {
    return (
      <div className="app-wrapper">

        <Navbar />
        <Hero />
        <Carrousel />
        <Footer />

      </div>
    );
  }
}


export default App;
