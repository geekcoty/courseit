import React from "react";
import Slider from "react-slick";
import Thumbnail from "../SlickCarrousel/Thumbnail";

import "../SlickCarrousel/style.scss";

class SlickCarrousel extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      arrows: true,
      infinite: props.infinite,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };
  }
  render() {
    const { title1, title2, title3, content, myList} = this.props;

 
    return (
      <div className="content-wrapper">
        <div>
          <h2 className="title" id="series">{title1}</h2>
          <div className="series-wrapper">
            <Slider {...this.settings}>
              {content.series.map((data, key) => {
                return <Thumbnail data={data} key={key} />;
              })}
            </Slider>
          </div>
        </div>
        <div className="movies-wrapper">
          <h2 className="title" id="movies">{title2}</h2>
          <div>
            <Slider {...this.settings}>
              {content.movies.map((data, key) => {
                return <Thumbnail data={data} key={key} />;
              })}
            </Slider>
          </div>
        </div>
        <div>
          <h2 className="title" id="mylist">{title3}</h2>
          <div className="mylist-wrapper">
           <Slider {...this.settings}>
              {myList.map((data,key) => {
                return <Thumbnail data={data} key={key} />
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default SlickCarrousel;
