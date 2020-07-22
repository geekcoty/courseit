import React from "react";
import Card from "../Card";

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
      <div>
      {
        startups.map((startup,key) => {
          return(
          <React.Fragment>
            { startup.title.toLowerCase().includes( filter.toLoweCase () ) && (
                <Card startup = {startup} key =  {key} />
            )}
         </React.Fragment>
          );
        })}

      </div>
    );
  }
}

export default CardWrapper;