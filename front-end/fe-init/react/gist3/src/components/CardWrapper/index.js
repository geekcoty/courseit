import React from "react";
import Card from "./Card";
import "./style.css";
import startups from "../../data/startups.json"

/*constructor(props) {
    super(props);
    this.state = {
      startups: [],
    };
  }
  componentDidMount() {
    //Leer data desde el LS
    const startups = localStorage.getItem("startups");
    // Transformar data del LS a JSON
    const parsedStartups = JSON.parse(startups);
    this.setState ({
      startups: parsedStartups
    })
  }*/

class CardWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
     startups : startups
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