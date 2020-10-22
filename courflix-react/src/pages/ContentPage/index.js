import React from "react"

import NavBar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

import "../ContentPage/style.scss";

class ContentPage extends React.Component{
  render(){
    return (
      <div className="content-wrapper">
      <NavBar/>
      <Hero/>
      <p> Soy la content page</p>
      <Footer/>
      </div>
    )
  }
}


export default ContentPage;