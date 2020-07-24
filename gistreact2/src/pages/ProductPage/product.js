import React from "react";
import  "./style.css";
import Startups from "../../data/startups.json";
import Navbar from "../../components/Navbar"
class ProductPage extends React.Component {
  render () {

    console.log (Startups);
    return (

      <React.Fragment>
        <Navbar />
        <div className="content-wrapper">
          course it
        </div>

      </React.Fragment>
    )
  }
}

export default ProductPage;