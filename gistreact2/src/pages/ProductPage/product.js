import React from "react";
import  "./style.css";
import startups from "../../data/startups.json";
import Navbar from "../../components/Navbar"
class ProductPag3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      name: "",
      desc: "",
    };
  }

  componentDidMount() {
    const filtered = startups.filter((startup) => {
      return startup.id == this.props.match.params.productId;
    });

    this.setState ({
      name:filtered[0].name,
      img:filtered[0].logo,
      desc: filtered[0].desc
    })
  }
    
  
  render() {

    const { img, name, desc} = this.state;

    return (

      <React.Fragment>
        <Navbar />
        <div className="content-wrapper">
          <div className="hero-div"></div>
          <div className="info-div">
            <img src = { img } />
            <p> Mi nombre es  { name }</p>
            <p> Mi descripción es  { desc }</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductPag3;