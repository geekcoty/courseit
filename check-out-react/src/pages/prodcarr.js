import React from 'react';
import Slider from "react-slick";


class ProductCarrousel extends React.Component {
constructor(props){
  super(props);

  this.settings = {
    slidesToShow= 3,
    slidestoSCroll= 1,


  }
}
render () {
  return ( 

    <div className="carrousel-wrapper">
      <Slider {...this.settings}>
        <div>
          <img src="#" alt="camera"/>
        </div>

          <div>
          <img src="#" alt="camera"/>
        </div>

          <div>
          <img src="#" alt="camera"/>
        </div>

          <div>
          <img src="#" alt="camera"/>
        </div>

          <div>
          <img src="#" alt="camera"/>
        </div>

          <div>
          <img src="#" alt="camera"/>
        </div>

          
      </Slider>
    </div>
  )
}
}

export default ProductCarrousel;
