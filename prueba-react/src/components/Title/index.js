import React from "react";
import "./styles.css";


class Title extends React.Component {
  render(){
    return (

      <p className="title"> {this.props.content}</p>
    )
  }
}

export default Title;