import React from "react";

import "./style.scss";

class Item extends React.Component {
  render() {
    return (
      <div className="indiv-item-wrapper">
        <p className="indiv-item-img"> item img</p>
        <div className="indiv-item">
          <p className="indiv-item-name"> item name</p>
          <p className="indiv-item-price">item price</p>
        </div>
      </div>
    );
  }
}

export default Item;
