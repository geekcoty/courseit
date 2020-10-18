import React from "react";
import "./style.scss";

class Sum extends React.Component {
  render (){
    return (
      <div className="sum-wrapper">
        <p className="sum-title">  Shipping:  </p>
        <p className="sum-title">  Total: </p>
      </div>
    );
  }
}


export default  Sum;