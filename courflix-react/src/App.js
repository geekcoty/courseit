import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";
import courflix from "./data/courflix.json";

import "./App.scss";



class App extends React.Component {

  render() {
    const pelis = [
      {
        name: "The Goonies",
        synopsis:
          "A young teenager named Mikey Walsh finds an old treasure map in his father's attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.",
        thumbnail: "https://i.postimg.cc/qM7K0G8X/goonies.jpg",
        cover: "https://i.postimg.cc/HLJ224L1/gooniescover.jpg",
        id: 17,
        type: "movie",
      },
      {
        name: "Hamilton",
        synopsis:
          "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
        thumbnail: "https://i.postimg.cc/Fs2HqbGK/hamilton.jpg",
        cover: "https://i.postimg.cc/4N5BNx0q/hamiltoncover.jpg",
        id: 18,
        type: "movie",
      },
    ];
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
        <Carrousel title="Peliculas" pelis={pelis} />
        <Footer />
      </div>
    );
  }
}

export default App;
