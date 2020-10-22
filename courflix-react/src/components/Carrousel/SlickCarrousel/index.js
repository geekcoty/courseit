import React from "react";
import Thumbnail from "../SlickCarrousel/Thumbnail";


import "./style.scss";


class SlickCarrousel extends React.Component {
  

  render (){

    return (
      <div className="slick-wrapper">
        <div className="series-slick"></div>
        <Thumbnail/>
      </div>
    );
  }
}

export default SlickCarrousel;