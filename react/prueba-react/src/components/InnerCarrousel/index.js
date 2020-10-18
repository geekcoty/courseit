import React from "react";
import Card from "../Card"
import "./styles.css";


class InnerCarrousel extends React.Component {
  constructor(props){
    super (props);
    console.log("Soy el InnerCarrousel")
  }
  render(){
    const { items } = this.props 
    return (
      <React.Fragment>
      {items.map((value)=> {
        return (
          <Card items={value} />
        )
      })}
      </React.Fragment>
    )
  }
}

export default InnerCarrousel;