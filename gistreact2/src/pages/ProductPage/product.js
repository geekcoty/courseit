import React from "react";
import  "./style.css";
import Startups from "../../data/startups.json";
import Navbar from "../../components/Navbar"
class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      name: "",
      desc: "",
    };
  }

  componentDidMount () {
    const filtered = startups.filter((startup)) => {
      return startup.id == this.props.match.params.productId
    });


  }
  
  render() {
    console.log(Startups);
    return (
      <React.Fragment>
        <Navbar />
        <div className="content-wrapper">
          <div className="hero-div"></div>
          <div className="info-div"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductPage;