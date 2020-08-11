import React from "react";

import Item from "../Item";
import Sum from "../Sum";

import "./style.scss";


class Cart extends React.Component{
  render (){
    return (
      
      <div className="item-wrapper">
        <div className="item-subwrapper">
          <Item />
          <Item />
          <Sum />
        </div>
      </div>

    )
  }
}

export default Cart