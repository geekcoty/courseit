import React from "react"
import "../movie/style.scss"
import NavBar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"


class Movie extends React.Component{
  render(){
    return (
      <div className="movie-wrapper">
      <NavBar/>
      <Hero/>
      <p> Seleccion de pelicula</p>
      <Footer/>
      </div>
    )
  }
}


export default Movie;