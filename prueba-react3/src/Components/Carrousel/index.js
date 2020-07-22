import React from "react"
import InnerCarrousel from "../InnerCarrousel"


 class Carrousel extends React.Component {
   
   render (){
     return (
       <React.Fragment>
        <h2>{this.props.title}</h2>

      <InnerCarrousel products={this.props.products} />
       </React.Fragment>
     )
    }
 }

   export default Carrousel;