import React from "react"
import "./style.css"
import {Link} from "react-router-dom"

class Card extends React.Component {
  render () {
    const {logo, title, desc} =this.props.startup
    return (
      <div> 
        <Link  className="card" to={`/productos/${title.toLowerCase()}`}>
         <img className="cardimage" src={logo} alt="img startup"/>
         <p> {title}</p>
         <p> {desc}</p>
      </Link>
      </div>
    )
  }
}

export default Card
