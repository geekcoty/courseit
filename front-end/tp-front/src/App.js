import React from 'react';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';
import Hero from './Components/Content/Hero';
import Body from './Components/Content/Body';

import './App.scss';
import courflix from './data/courflix.json';

class App extends React.Component {


	render() {
		const data = courflix;
		const courflixArray = Object.values(data);

	
		return (
      <div className="app-wrapper">
        <Navbar />
        <Hero
          className="hero-div"
          homeHero={data.series[15]}
          media={courflixArray}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.series[15].cover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Body />
        <Footer />
      </div>
    );
	}
}

export default App;
