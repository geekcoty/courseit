import React from "react"
import Card from "../Card"

class InnerCarrousel extends React.Component {
    constructor (props){
    super(props);

    this.state = {
      products: []
    }
  }

  render (){
    return (
      <React.Fragment>
      {this.props.products.map((product,key) => {
        return (
          <Card key={key} product={product}/>
        )
      })}
      </React.Fragment>
    )
  
  }
}
export default InnerCarrousel;