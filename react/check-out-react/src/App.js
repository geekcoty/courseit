import React from 'react';

import Slider from "react-slick";
import {Link} from "react-router-dom"; 

import products from "../src/data/products.json";
import "./App.scss";
class App extends React.Component {

constructor(props){
  super(props);

  this.settings = {
    slidesToShow: 3,
    slidesToScroll:2,
    infinite:false,
    arrows:true
  }
}

  render () {
  return (
    <div className="slider-wrapper">
      <Slider {...this.settings} className="slider-content">
        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>

        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>

        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>

        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>

        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>

        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg"/>
        </div>
        <div>
          <img src="https://i.postimg.cc/3J9dSV89/canon1.jpg"/>
        </div>
      </Slider>

      <Link to ="/checkout"> Pagar </Link>
    </div>
  );
}
}

export default App;
