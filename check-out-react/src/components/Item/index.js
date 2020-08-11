import React from "react";

import "./style.scss"

class Item extends React.Component {
  render (){
    return (
      <div className="item-indiv-wrapper">
        <p> item name</p>
        <p> item img</p>
      </div>
    )
  }
}


export default Item;