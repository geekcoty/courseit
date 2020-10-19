import React from "react"
import "./style.css"

class Title extends React.Component{
  render (){
    return (
        <p> {this.props.title}</p>
    )
  }
}

export default Title;