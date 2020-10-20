import React from "react";
import Slider from "react-slick"

import "./style.scss";


class SlickCarrousel extends React.Component {
  constructor (props) {
    super(props);
    this.settings = {
      slidesToShow: 5,
      slidesToScroll:5
    }
    }


  render (){
    return (
      <div className="slick-wrapper">
        <div className="series-slick">
          
          <Slider {...this.settings}></Slider>
        </div>
        <div className="movies-slick">
           soy un carrousel
          <Slider {...this.settings}></Slider>
        </div>
        <div className="added-slick">
          <Slider {...this.settings}></Slider>
        </div>
        <div className="mylist-slick">
          <Slider {...this.settings}></Slider>
        </div>
      </div>
    );
  }
}

export default SlickCarrousel;