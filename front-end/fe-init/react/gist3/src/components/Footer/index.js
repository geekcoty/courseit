import React from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

class Footer extends React.Component {
  render (){
    return (

      <p className="credit"> Made with <FontAwesomeIcon icon= {faHeart} /> by Coty </p>
    )
  }
}

export default Footer
