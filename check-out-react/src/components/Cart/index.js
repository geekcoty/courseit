import React from "react";

import Item from "../Item";
import Sum from "../Sum";


class Cart extends React.Component{
  render (){
    return (
      
      <div className="item-wrapper">
        <Item />
        <Item />
        <Sum />
      </div>

    )
  }
}

export default Cart