import React from "react"
import "./style.css"

class Title extends React.Component{
  render (){
    //Para mostrar la prop:
    // {this.props.NOMBREDELATRIBUTO}
    return (
        <p> {this.props.title}</p>
    )
  }
}

export default Title;