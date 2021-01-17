import React from "react";
import Thumbnail from "../SlickCarrousel/Thumbnail";
import Slider from "react-slick";
import "./style.scss"

class SlickCarrousel extends React.Component {
  constructor(props){
    super(props);
    this.settings = {
      slidesToShow:6,
      slidesToScroll:1,
      infinite:true,
    }
  }
  render () { 
  console.log(this.props.content)
  const {content} = this.props
    return (
      <div className="slick-wrapper">
        <Slider {...this.settings}>
          {content.map((content, key) => {
            return (
              (<Thumbnail content={content} key={key} />)
            );
          })}
        </Slider>
      </div>
    );
  }

}

export default SlickCarrousel