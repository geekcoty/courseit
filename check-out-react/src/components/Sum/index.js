import React from "react";
import "./style.scss";

class Sum extends React.Component {
  render (){
    return (
      <div className="sum-wrapper">
        <p className="sum-title">  Shipping: USD 5,00 </p>
        <p className="sum-title"> Total: </p>
      </div>
    );
  }
}


export default  Sum;