import React from 'react';

/*import "./App.scss";*/
import Form from "./components/Form";
import Cart from "./components/Cart";
import Slider from "react-slick";
import products from "../src/data/products.json";

class App extends React.Component {

constructor(props){
  super(props);

  this.settings = {
    slidesToShow: 4,
    slidesToScroll:1,
    infinite:true,
  }
}

  render () {
  return (
    <div className="content-wrapper">
      <Slider {...this.settings}>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/KvMHQDcq/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/RFZ7847C/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/RFZ7847C/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/RFZ7847C/markus-spiske-i6sa-CH0-Iod-E-unsplash.jpg" />
        </div>
      </Slider>
    </div>
  );
}
}

export default App;
