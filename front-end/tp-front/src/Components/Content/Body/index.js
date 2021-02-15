import React from "react";
import Carrousel from "../Body/Carrousel"
import courflix from "../../../data/courflix.json"

class Body extends React.Component {
  render() {
    const data = courflix
    return (
    
    <Carrousel  content={data} title1={"Series"} title2={"Movies"} title3={"My List"}/>
    ) 
  }
}

export default Body;

