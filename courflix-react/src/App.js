import React from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";

function App () {

    return (

    <React.Fragment>

      <Navbar />
      <Hero />
      <Carrousel /> 
      <Footer />

    </React.Fragment>
    )
  }

export default App;
