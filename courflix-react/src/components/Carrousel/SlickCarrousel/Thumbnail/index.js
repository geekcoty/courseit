import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import React from "react";

class Thumbnail extends React.Component{
  render () {
  return (

    <React.Fragment>
      <img src={this.props.peli.thumbnail}/>
      <p> {this.props.peli.name}</p>
    </React.Fragment>
  )
  }
}

export default Thumbnail;