import React from "react";
import Card from "../CardWrapper/Card";
import "../CardWrapper/style.css";

class CardWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startups : [
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
   ]     
    }
  }

  render () {  
    const {startups} = this.state  
    const {filter} = this.props
    return (
      <div className="wrapper">
      {startups.map((startup, key) => {
      
        return( 
        <React.Fragment>
        {startup.title.toLowerCase().includes(filter.toLowerCase()) && (
        <Card startup={startup} key={key} 
        />
   
        )}
      </React.Fragment>
        );
      })}
      

      </div>
    )
  }
}

export default CardWrapper;