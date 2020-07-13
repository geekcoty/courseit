import React from "react";
import Card from "../Card";

class CardWrapper extends React.Component {
  render (){

  const startups=[{

  img:"./components/Card/Assets/su1.png",  
  title: "CourseIt",
  description: "Descripción CourseIt"
},
{
  img:"./componets/Card/Assets/su2.png",
  title:"Endava",
  description: "Descripción Endava"
}
]
    return (
      <React.Fragment>
      {
        startups.map((startup,key) => {
          return(
           
          <Card startup={startup} key={key} />
          )
        }
        )
      }

      </React.Fragment>
    )
  }
}

export default CardWrapper;