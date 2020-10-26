import React from "react";
import Thumbnail from "../SlickCarrousel/Thumbnail";


import "./style.scss";


class SlickCarrousel extends React.Component {
  

  render (){
    console.log(this.props.pelis)
    return (
      <div className="slick-wrapper">
        <div className="series-slick"></div>
        {this.props.pelis.map((peli,key) => {
          return (
            <React.Fragment>
              <Thumbnail peli={peli} key={key} />
            </React.Fragment>
          );
        })
        }

      </div>
    );
  }
}

export default SlickCarrousel;