import React from "react"
import Navbar from "../Components/Navbar"
import Content from "../Components/Content"
import Footer from "../Components/Footer"

import "../../src/Pages/style.scss"

class MediaPage extends React.Component {

  render() {
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