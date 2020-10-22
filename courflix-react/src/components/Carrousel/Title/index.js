import React from "react"
import "./style.scss";

class Title extends React.Component {
  render (){
    return (
      <p className="title"> {this.props.title}</p>
    )
  }
}

export default Title