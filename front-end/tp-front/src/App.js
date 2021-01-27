import React from "react"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

import "./App.scss"


class App extends React.Component {
  render (){
    return (
      <div className="app-wrapper">
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
