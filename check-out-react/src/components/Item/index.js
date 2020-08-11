import React from "react";

import "./style.scss"

class Item extends React.Component {
  render (){
    return (
      <div className="indiv-item-wrapper">
        <p className="indiv-item"> item name</p>
        <p className="indiv-item-img"> item img</p>
      </div>
    )
  }
}


export default Item;