import React from "react";
import Card from "../CardWrapper/Card";
import "../CardWrapper/style.css";

class CardWrapper extends React.Component {

  render () {
   const startups = [
     {
       img: "https://i.postimg.cc/B6d7C6LD/su1.jpg",
       title: "CourseIt",
       description: "Descripción de CourseIt",
     },
     {
       img: "https://i.postimg.cc/x8Mxp2MZ/su2.jpg",
       title: "Endava",
       description: "Descripción de Endava",
     },
   ];     
    return (
      <div className="wrapper">

      {startups.map((startup, key) => {
        return( <Card startup={startup} key={key} />)
   
      })
      }

      </div>
    )
  }
}

export default CardWrapper;