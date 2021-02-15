import React from "react"
import Navbar from "../Components/Navbar"
import Content from "../Components/Content"
import Footer from "../Components/Footer"
import courflix from "../data/courflix.json"

import "../../src/Pages/style.scss"

class MediaPage extends React.Component {
  

  render() {
    console.log(this.props);
    return (
      <div className="app-wrapper">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}


export default MediaPage