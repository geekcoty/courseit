import React from "react";

class Carrousel extends React.Component {
  render () {
    console.log(this.props)
 return (
   <div className="wrapper">
    <p> {this.props.title}</p>
   </div> 
 )
  }
}

export default Carrousel;