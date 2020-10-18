import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom"

class CardWrapper extends React.Component {
  constructor (props) {
    super (props);

    this.state = { 
      startups: [ 
  
  { 
  img:"./Assets/su1.jpg",  
  title: "CourseIt",
  description: "Descripción CourseIt"
},
{
  img:"./Assets/su2.jpg",
  title:"Endava",
  description: "Descripción Endava"
}
]
}
}

render () {
const { startups } = this.state;
const { filter } = this.props;
    return (
      <div className="startup-wrapper">
      {
        startups.map((startup,key) => {
          return(
          <React.Fragment>
            { startup.title.toLowerCase().includes( filter.toLowerCase () ) && (
              <Link to={ `/products/${startup.title.toLowerCase()}`}>
                <Card startup = {startup} key = {key} />
            </Link>
            )}
         </React.Fragment>
          );
        })}

      </div>
    );
  }
}

export default CardWrapper;