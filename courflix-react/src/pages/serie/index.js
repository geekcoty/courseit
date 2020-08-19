import React from "react";
import "../serie/style.scss";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

class Serie extends React.Component {
  render() {
    return (
      <div className="serie-wrapper">
        <NavBar />
        <Hero />
        <p> Seleccion de serie</p>
        <Footer />
      </div>
    );
  }
}

export default Serie;
