import React from "react"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

class App extends React.Component {
  render (){
    return (
      <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
